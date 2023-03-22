import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RgisterModal';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import EditModal from '../components/modals/EditModal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModal />
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
