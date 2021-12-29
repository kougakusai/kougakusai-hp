import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ArticleLayout from 'src/components/templates/ArticleLayout';
import Subtitle from 'src/components/modules/Subtitle';
import { prefix } from 'src/utils/constants';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)]">
        <Subtitle text="404 NotFound" />
        <p className="p-2 text-[1.5rem] k-lg:text-[1.8rem]">
          ページが存在しません。URLが間違っている可能性があります。
          <br />
          <Link href="/">
            <a className="underline text-k-blue-dark">トップページへ</a>
          </Link>
        </p>
        <img
          src={`${prefix}/sleep.png`}
          alt="寝てるイメージキャラクター"
          className="w-[200px] m-auto sm:m-0"
        />
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
