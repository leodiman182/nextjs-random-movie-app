import MainLayout from '../components/layout/main-layout';
import Head from 'next/head';
import MainProvider from '@/context/MainProvider';
import './styles.css';

export default function App({ Component, pageProps }) {
  return (
    <MainProvider>
      <Head>
        <title>Random Movie app</title>
        <meta
          name="description"
          content="Generated by create next app and edited by Leonardo Diman"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="public/favicon-16x16.png"
        />
        <link rel="manifest" href="public/site.webmanifest" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Limelight&family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MainProvider>
  );
}
