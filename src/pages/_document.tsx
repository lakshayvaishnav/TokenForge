import {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";
import Document from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/favicon.icon" />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
