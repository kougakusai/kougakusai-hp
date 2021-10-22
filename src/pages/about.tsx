import type { ReactElement } from "react";
import Head from "next/head";
import ArticleLayout from "src/components/templates/ArticleLayout";

export default function About() {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)]">
        <p className="p-2 mb-[50px] text-[1.5rem] k-lg:text-[1.8rem]">
          昨年度のこうがく祭はオンラインでの開催となりました。
          <br />
          オンライン開催では研究室紹介やサークル企画等を特設サイト上にて掲載しました。今年度の開催方法については未定です。
          決まり次第お知らせいたします。
          <br />
        </p>
      </article>
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