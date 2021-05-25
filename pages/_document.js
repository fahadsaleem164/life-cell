import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        
            <Head>
            {/* <meta charset="UTF-8"/> */}
            {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
            {/* <meta http-equiv="X-UA-Compatible" content="ie=edge"/> */}
            <link rel="stylesheet" href="css/bootstrap.min.css"/>
            <script src="js/jquery_main_file.js"></script>
            <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css"/>
            <link rel="stylesheet" href="css/style.css"/>
            <link rel="stylesheet" href="css/hover.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@400&display=swap"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            {/* <meta name="viewport" content="width=device-width, initial-scale=1"/> */}
            {/* <title>Index</title> */}
            </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/jquery-3.4.1.slim.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
        
        </body>
      </Html>
    )
  }
}

export default MyDocument