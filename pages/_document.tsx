import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          {/* Fonts from Google */}
          {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link href='https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' /> */}
          {/* Favicon settings */}
          {/* <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/assets/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/assets/favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' /> */}
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
