'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode } from 'react';

type GoogleOAuthProviderProps = {
  /**
   * Nonce applied to GSI script tag. Propagates to GSI's inline style tag
   */
  nonce?: string;
  /**
   * Callback fires on load [gsi](https://accounts.google.com/gsi/client) script success
   */
  onScriptLoadSuccess?: () => void;
  /**
   * Callback fires on load [gsi](https://accounts.google.com/gsi/client) script failure
   */
  onScriptLoadError?: () => void;
  clientId: string;
  children: ReactNode;
};

export const CustomGoogleOAuthProvider = ({
  children,
  ...props
}: GoogleOAuthProviderProps) => {
  return <GoogleOAuthProvider {...props}>{children}</GoogleOAuthProvider>;
};
