import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ArticleLayout from 'src/components/templates/ArticleLayout';
import Subtitle from 'src/components/modules/Subtitle';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)]">
        <Subtitle text="404 NotFound" />
        <p className="p-2 text-[1.5rem] k-lg:text-[1.8rem] mb-[50px]">
          ページが存在しません。URLが間違っている可能性があります。
          <br />
          <Link href="/">
            <a className="underline text-k-blue-dark">トップページへ</a>
          </Link>
        </p>
      </article>
    </>
  );
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="NotFound" titleEn="404">
      {page}
    </ArticleLayout>
  );
};
