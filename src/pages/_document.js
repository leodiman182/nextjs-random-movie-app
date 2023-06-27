import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Quicksand:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
