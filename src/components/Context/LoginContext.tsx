'use client';
import { LoginType } from '@/types/AuthTypes/LoginType';
import { checkEmpty } from '@/utils/checkEmpty';
import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { useLocalStorage, useUpdateEffect } from 'usehooks-ts';

export const LoginContext = createContext<{
  loginData: LoginType | null | undefined;
  isLogin: boolean;
  logOut: () => void;
  logIn: (data: LoginType) => void;
  setOnLoginSuccess: (callback?: () => void) => void;
}>({
  loginData: null,
  isLogin: false,
  logOut: () => {},
  logIn: () => {},
  setOnLoginSuccess: () => {},
});

export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [onLoginSuccessCallback, setOnLoginSuccessCallback] =
    useState<() => void | undefined>();
  const [loginData, setLoginData] = useLocalStorage<
    LoginType | null | undefined
  >('login_data', null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const logOut = () => {
    setLoginData(null);
    //window.location.reload();
  };

  const onLoginSuccess = (callback?: () => void) => callback?.();

  const logIn = (data: LoginType, onSuccess?: () => void) => {
    setLoginData(data);
    onLoginSuccessCallback?.();
    onLoginSuccess(onSuccess);
    // onLoginSuccessCallback
    //   ? onLoginSuccessCallback?.()
    //   : window.location.reload();
  };

  const setOnLoginSuccess = (callback?: () => void) =>
    setOnLoginSuccessCallback(() => callback);

  useUpdateEffect(() => {
    setIsLogin(!checkEmpty(loginData));
  }, [loginData]);

  return (
    <LoginContext.Provider
      value={{
        loginData,
        logIn,
        setOnLoginSuccess,
        isLogin,
        logOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
