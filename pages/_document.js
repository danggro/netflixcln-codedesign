import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Volkhov:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#1A1C22] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
