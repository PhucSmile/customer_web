export const commonAPIStatus = [
  {
    status: 0,
    status_code: 'UNKNOWN',
    success: false,
    message: 'Lỗi không rõ',
  },
  {
    status: 1,
    status_code: 'SUCCESS',
    success: true,
    message: 'Tác vụ hoàn thành thành công',
  },
  {
    status: 100,
    status_code: 'ERROR',
    success: false,
    message: 'Có lỗi xảy ra',
  },
  {
    status: 101,
    status_code: 'ERROR_FORBIDDEN',
    success: false,
    message: 'Không có quyền truy cập chức năng này',
  },
  {
    status: 102,
    status_code: 'ERROR_BAD_REQUEST',
    success: false,
    message: 'Yêu cầu không hợp lệ',
  },
  {
    status: 103,
    status_code: 'ERROR_PARAMS',
    success: false,
    message: 'Tham số URL không hợp lệ',
  },
  {
    status: 104,
    status_code: 'ERROR_HEADER',
    success: false,
    message: 'Header không hợp lệ',
  },
  {
    status: 105,
    status_code: 'ERROR_BODY_SCHEMA',
    success: false,
    message: 'Định dạng thân dữ liệu không hợp lệ',
  },
  {
    status: 108,
    status_code: 'ERROR_NOTFOUND',
    success: false,
    message: 'Không tìm thấy',
  },
  {
    status: 109,
    status_code: 'ERROR_PERMISSION',
    success: false,
    message: 'Không đủ quyền truy cập',
  },
  {
    status: 200,
    status_code: 'ERROR_ALREADY_EXISTS',
    success: false,
    message: 'Dữ liệu đã tồn tại',
  },
  {
    status: 301,
    status_code: 'ERROR_WRONG_USERNAME_OR_PASSWORD',
    success: false,
    message: 'Sai tài khoản hoặc mật khẩu',
  },
  {
    status: 302,
    status_code: 'ERROR_NULL_OR_EMPTY_PASSWORD',
    success: false,
    message: 'Tài khoản hoặc mật khẩu rỗng',
  },
  {
    status: 303,
    status_code: 'ERROR_DELETE_IS_NOT_ALLOWED',
    success: false,
    message: 'Không thể thực hiện tác vụ xóa',
  },
  {
    status: 304,
    status_code: 'ERROR_REQUEST_TOO_MANY_TIMES_IN_A_SHORT_PERIOD',
    success: false,
    message:
      'Tài khoản đã yêu cầu quá nhiều lần trong thời gian ngắn. Vui lòng thử lại sau.',
  },
];
