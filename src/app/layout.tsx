import Providers from '@/utils/ReactQuery/provider';
import './globals.css';
//import { Inter } from 'next/font/google';
import { LoginContextProvider } from '@/components/Context/LoginContext';
import { ThemeProvider } from '@/components/MaterialTailwind';
import { CustomFacebookProvider } from '@/components/Context/CustomFacebookProvider';
import { CustomGoogleOAuthProvider } from '@/components/Context/CustomGoogleOAuthProvider';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// const text = Inter({
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// });

export const metadata = {
  title: 'MOGA',
  description: 'Moga',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body //className={text.className}
      >
        <LoginContextProvider>
          <Providers>
            <CustomFacebookProvider appId={'178207665156547'}>
              <CustomGoogleOAuthProvider clientId="897063624531-pd3oii9jo90a5bo22fs30o3h2bhupl80.apps.googleusercontent.com">
                <ThemeProvider>{children}</ThemeProvider>
              </CustomGoogleOAuthProvider>
            </CustomFacebookProvider>
          </Providers>
        </LoginContextProvider>
        <ToastContainer
          position="top-right"
          pauseOnFocusLoss={false}
          autoClose={3000}
          newestOnTop
          limit={4}
          transition={Zoom}
          theme="colored"
        />
      </body>
    </html>
  );
}
