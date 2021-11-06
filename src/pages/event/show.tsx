import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import ArticleLayout from "src/components/templates/ArticleLayout";
import Subtitle from "src/components/modules/Subtitle";

const contents = [
  {
    title: "茨城大学フォーミュラ",
    description: "茨城大学フォーミュラの紹介動画です。",
    url: "https://youtu.be/bOuJYDg2OCM",
  },
  {
    title: "フォークソングクラブ",
    description: "サンキューリリーバイバイリリーリーガルリリー",
    url: "https://youtu.be/SoWmn0HM6F0",
  },
  {
    title: "フォークソングクラブ",
    description: "メールアドレス",
    url: "https://youtu.be/A-xGCNqbOAo",
  },
];

const Show = () => {
  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="text-[1.5rem] k-lg:text-[1.8rem] relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)] space-y-[50px]">
        <div>
          <Subtitle text="茨城大学フォーミュラ" />
          <p className="p-2">茨城大学フォーミュラの紹介動画です。</p>
          <a
            href="https://youtu.be/bOuJYDg2OCM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            YouTubeで見る
          </a>
        </div>
        <div>
          <Subtitle text="フォークソングクラブ" />
          <p className="p-2">フォークソングクラブの演奏動画です。</p>
          <br />
          <p className="p-2">サンキューリリーバイバイリリーリーガルリリー</p>
          <a
            href="https://youtu.be/SoWmn0HM6F0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            YouTubeで見る
          </a>
          <p className="p-2 mt-4">RiCELAY</p>
          <a
            href="https://youtu.be/A-xGCNqbOAo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            YouTubeで見る
          </a>
        </div>
        <div>
          <Subtitle text="茨城大学漫画研究会" />
          <p className="p-2">茨城大学漫画研究会の企画ページです。</p>
          <Link href="/event/mangakenkyukai">
            <a className="p-2 underline text-k-blue-dark cursor-pointer">
              企画ページへ
            </a>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Show;

Show.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="企画一覧" titleEn="Contents">
      {page}
    </ArticleLayout>
  );
};
