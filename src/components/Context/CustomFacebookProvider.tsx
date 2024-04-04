'use client';
import { ReactNode } from 'react';
import { FacebookProvider } from 'react-facebook';

type FacebookOptions = {
  domain?: string;
  version?: string;
  cookie?: boolean;
  status?: boolean;
  xfbml?: boolean;
  language?: string;
  frictionlessRequests?: boolean;
  debug?: boolean;
  chatSupport?: boolean;
  appId: string;
  autoLogAppEvents?: boolean;
  lazy?: boolean;
};

type CustomFacebookProviderPropsType = FacebookOptions & {
  children: ReactNode;
};

export const CustomFacebookProvider = ({
  children,
  ...props
}: CustomFacebookProviderPropsType) => {
  return <FacebookProvider {...props}>{children}</FacebookProvider>;
};
