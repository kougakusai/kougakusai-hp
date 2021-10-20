import type { ReactElement } from "react";
import Head from "next/head";
import ArticleLayout from "src/components/templates/ArticleLayout";

export default function About() {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <main>
        <p>pages:about</p>
      </main>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="オンライン開催について" titleEn="About">
      {page}
    </ArticleLayout>
  );
};
