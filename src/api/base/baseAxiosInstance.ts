import { LoginType } from '@/types/AuthTypes/LoginType';
import { getTimezoneOffset } from '@/utils/dateUtils';
import {
  encodeRFC3986URI,
  md5Hashing,
  randomStringGenerator,
  reverseString,
} from '@/utils/stringUtils';
import { Mutex } from 'async-mutex';
import axios, {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosError,
} from 'axios';

const baseURL = '/api/c2s/';

const requestTimeout = 30000; //(ms)

const mutex = new Mutex();

const axiosInstance = axios.create({
  data: null,
  baseURL,
  timeout: requestTimeout,
  headers: {
    'client-app-id': process.env.NEXT_PUBLIC_CLIENT_APP_ID,
    //'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Giải phần cấu hình yêu cầu
    const { url, data } = config;

    // Xử lý dữ liệu đăng nhập lưu trong localStorage
    if (localStorage.getItem('login_data') == null) {
      localStorage.removeItem('login_data');
    }
    const loginData = JSON.parse(
      localStorage.getItem('login_data') ?? '{}',
    ) as LoginType;

    // Lấy thông tin thời gian hiện tại
    const now = new Date();
    const UTCNow = now.toISOString();
    const UTCOffset = getTimezoneOffset(now);

    // Xây dựng URL yêu cầu hoàn chỉnh
    const requestUrl = `${baseURL}${url}`;

    // Tạo salt ngẫu nhiên
    const randomSalt = randomStringGenerator(
      Math.max(
        10,
        Math.abs(
          now.getUTCMonth() +
            1 +
            now.getUTCDate() +
            now.getUTCMinutes() -
            now.getUTCSeconds(),
        ),
      ),
    );

    // Lấy thông tin về nền tảng hệ điều hành
    const osPlatform = window.navigator?.userAgentData?.platform;

    // Chuyển đổi dữ liệu thành chuỗi JSON
    const stringifiedBody = data ? JSON.stringify(data) : '';

    // Đảo ngược salt ngẫu nhiên
    const reversedRandomSalt = reverseString(randomSalt);

    // Mã hóa và đảo ngược URL yêu cầu
    const reversedEncodedURL = reverseString(encodeRFC3986URI(requestUrl));

    // Tạo hash client_secret1
    const client_secret1Hash = md5Hashing(
      `${reversedEncodedURL}${stringifiedBody}${UTCNow}${reversedRandomSalt}`,
    );

    // Tạo hash client_secret2
    const client_secret2Hash = md5Hashing(
      `${client_secret1Hash}${loginData?.jwt_token}${loginData?.user_id}${loginData?.id}`,
    );

    // Thêm thông tin xác thực vào headers
    return {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
        'client-random-salt': randomSalt,
        'client-utcnow': UTCNow,
        'client-utc-offset': UTCOffset,
        'client-os-platform': osPlatform,
        'client-secret1': client_secret1Hash,
        'client-secret2': client_secret2Hash,
        Authorization: `Bearer ${loginData?.jwt_token}`,
      },
    } as unknown as InternalAxiosRequestConfig;
  },
  (error) => console.log(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (axiosError: AxiosError) => {
    const { response, config } = axiosError;

    // Lấy jwt_refresh_token từ localStorage
    const jwt_refresh_token = (
      JSON.parse(localStorage.getItem('login_data') ?? '{}') as LoginType
    )?.jwt_refresh_token;

    // Kiểm tra lỗi phản hồi có status là 401 hoặc 403
    if (response?.status !== 401 && response?.status !== 403) {
      return Promise.reject(axiosError);
    }

    // Kiểm tra mutex không bị khóa
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        // Sử dụng một phiên bản Axios 'clean' mà không có interceptor để làm mới token. Tránh lặp vô hạn.
        const refreshResponse = await axios.get(
          'authen_service/user/login_refresh',
          {
            baseURL,
            timeout: requestTimeout,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwt_refresh_token}`,
              CLIENT_APP_ID: process.env.CLIENT_APP_ID,
            },
          },
        );

        // Lấy jwt_token mới từ phản hồi làm mới
        const jwt_token = refreshResponse?.data?.data?.jwt_token;

        // Cập nhật thông tin đăng nhập trong localStorage
        localStorage.setItem(
          'login_data',
          JSON.stringify(refreshResponse?.data?.data ?? {}),
        );

        // Cấu hình yêu cầu mới với jwt_token đã làm mới
        const authorizationConfig: AxiosRequestConfig = {
          ...config,
          headers: {
            ...config?.headers,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt_token}`,
          },
        };

        // Gửi lại yêu cầu ban đầu đã được cấu hình lại
        return axiosInstance(authorizationConfig);
      } catch {
        // Xóa thông tin đăng nhập trong localStorage
        localStorage.removeItem('login_data');
        // Thực hiện hành động sau khi xảy ra lỗi
        //return window.location.replace('/');
        //return Promise.reject(axiosError);
      } finally {
        // Giải phóng mutex sau khi hoàn thành
        release();
      }
    } else {
      // Đợi mutex được giải phóng
      await mutex.waitForUnlock();
    }
  },
);

export default axiosInstance;
