import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/logo.png"
          type="image.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
