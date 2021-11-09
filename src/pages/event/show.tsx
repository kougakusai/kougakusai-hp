import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import ArticleLayout from "src/components/templates/ArticleLayout";
import Subtitle from "src/components/modules/Subtitle";

const Show = () => {
  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="text-[1.5rem] k-lg:text-[1.8rem] relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)] space-y-[50px]">
        <div>
          <div>【こうがく祭メイン動画第一幕】</div>
          <Subtitle text="OP＆こうがく祭実行委員会企画" />
          <p className="p-2">こうがく祭のイントロダクション・工学部長挨拶・工学部各学科の紹介動画です。</p>
          <a
            href="https://www.youtube.com/watch?v=R0o8vr7dHRk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            YouTubeで見る
          </a>
        </div>
        <div>
          <div>【こうがく祭メイン動画第二幕】</div>
          <Subtitle text="Ibaraki University Racing" />
          <p className="p-2">Ibaraki University Racing（茨城大学学生フォーミュラ部）の紹介動画です。</p>
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
          <Subtitle text="Folk Song Club" />
          <p className="p-2">Folk Song Clubの演奏動画です。</p>
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
          <Subtitle text="Ending" />
          <p className="p-2">2021こうがく祭EDです。</p>
          <a
            href="https://www.youtube.com/watch?v=-4WpZTE2LzM&list=PLPA8wqBaYuhKedkNGkNM8QAKae1svkDsu&index=5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            YouTubeで見る
          </a>
        </div>
        <div>
          <Subtitle text="Ending" />
          <p className="p-2">2021こうがく祭第一幕から第二幕までの統合版です。</p>
          <a
            href="https://www.youtube.com/watch?v=-F51AwWCLgE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            YouTubeで見る
          </a>
        </div>
        <div>
          <div>【学内企画】</div>
          <Subtitle text="茨城大学漫画研究会" />
          <p className="p-2">茨城大学漫画研究会の企画ページです。</p>
          <Link href="/event/mangakenkyukai">
            <a className="p-2 underline text-k-blue-dark cursor-pointer">企画ページへ</a>
          </Link>
        </div>
        <div>
          <div>【その他コンテンツ】</div>
          <Subtitle text="多賀工業会(茨城大学工学部同窓会)" />
          <p className="p-2">写真・絵画のオンライン展示企画および同窓会の活動紹介です。</p>
          <a
            href="https://taga-kogyokai.ibaraki-univ.jp/%e5%a4%9a%e8%b3%80%e5%b7%a5%e6%a5%ad%e4%bc%9a%e3%80%80%e5%b1%95%e7%a4%ba-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            展示サイトへ
          </a>
        </div>
        <div>
          <Subtitle text="工学部YouTube公式チャンネル" />
          <p className="p-2">工学部で行ったガイダンスや模擬授業等の動画を掲載しています。</p>
          <a
            href="https://www.youtube.com/channel/UCDGeRWYaEFZpRuU-Untxdmg/playlists"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 underline text-k-blue-dark cursor-pointer"
          >
            展示サイトへ
          </a>
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
