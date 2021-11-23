import Document, { Html, Head, Main, NextScript } from "next/document";
import { prefix } from "src/utils/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href={`${prefix}/samu.svg`} />
          <meta
            content="茨城大学の工学部による学園祭、こうがく祭の2021年度版公式ホームページです。今年は11月6日にオンラインで開催されます。こうがく祭についての情報を発信していきます。"
            name="description"
          />
          <meta charSet="utf-8" />
          <meta
            property="og:url"
            content="https://kougakusai.github.io/kougakusai-hp/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="2021年こうがく祭公式HP" />
          <meta
            property="og:description"
            content="茨城大学の工学部による学園祭、こうがく祭の2021年度版公式ホームページです。今年は11月6日にオンラインで開催されます。"
          />
          <meta
            property="og:site_name"
            content="2021年こうがく祭公式HP | 茨城大学"
          />
          <meta
            property="og:image"
            content="https://kougakusai.github.io/kougakusai-hp/og.png"
          />
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
