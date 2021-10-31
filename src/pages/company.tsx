import { ReactElement } from "react";
import Head from "next/head";
import ArticleLayout from "src/components/templates/ArticleLayout";
import Subtitle from "src/components/modules/Subtitle";

const companies = [
  {
    name: "アイ・イー・シー(株)",
    ruby: "あいいーしー",
    url: "",
    img: "https://drive.google.com/uc?id=1ah7B1OdoF2vT0ZgzlRrgZOajJtju6PoY",
  },
  {
    name: "イガラシ綜業株式会社",
    ruby: "いがらしそうぎょうかぶしきがいしゃ",
    url: "https://www.igarashisogyo.com/",
    img: "https://drive.google.com/uc?id=1L0vZ1DRx4g80ptHqLvmjVTFnv_1RtBkq",
  },
  {
    name: "有)エイトプランニングオフィス",
    ruby: "えいとぷらんにんぐおふぃす",
    url: "",
    img: "https://drive.google.com/uc?id=1ReL-sxlkzO_xiQ-myIxMaN0i2ib0TcAh",
  },
  {
    name: "小野不動産",
    ruby: "おのふどうさん",
    url: "",
    img: "https://drive.google.com/uc?id=1ga13D_0AZKWXN52ucdH0OO3f178AOGtk",
  },
  {
    name: "香陵住販株式会社　日立支店",
    ruby: "こうりょうじゅうはんかぶしきがいしゃひたちしてん",
    url: "",
    img: "https://drive.google.com/uc?id=1sb4j-AEF9mXYTY770NKFDyRgkjUQ21Ti",
  },
  {
    name: "サイクルショップイマイ",
    ruby: "さいくるしょっぷいまい",
    url: "",
    img: "https://drive.google.com/uc?id=17pxv2xFOA1IaWoweWzPN5dxxT-ar_5D5",
  },
  {
    name: "社会医療法人愛宣会ひたち医療センター",
    ruby: "しゃかいいりょうほうじんあいせんかいひたちいりょうせんたー",
    url: "",
    img: "https://drive.google.com/uc?id=1UeBnBR2bnrFnvspChFDLTvh35aLWR6KD",
  },
  {
    name: "電鉄タクシー株式会社",
    ruby: "でんてつたくしーかぶしきがいしゃ",
    url: "",
    img: "https://drive.google.com/uc?id=1AhMvVLgJ0CFPXd60YWo_3xjGtv-LVqD5",
  },
  {
    name: "はくせん",
    ruby: "はくせん",
    url: "",
    img: "https://drive.google.com/uc?id=12N_Ye8r1Ngs8wnlhY-thIaZ9vFvsUTEk",
  },
  {
    name: "モモタ電気サービス",
    ruby: "ももたでんきさーびす",
    url: "",
    img: "https://drive.google.com/uc?id=1Le9WjwKOSwcBSfKvK-PeTv4VEcbdvXp5",
  },
  {
    name: "よしだ写真館",
    ruby: "よしだしゃしんかん",
    url: "http://yoshida-shashinkan.jp/",
    img: "https://drive.google.com/uc?id=1lBCzXTqkXKuWca8yERorunk4y7png9-S",
  },
];

function Company() {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="text-[1.8rem]">
        <div className="mb-[50px]">
          <Subtitle text="ご協賛いただいた企業一覧（敬称略・50音順）" />
          <p className="p-[6px]">
            下線、色付きのご協賛企業名はクリック／タップしていただくと、各企業のホームページへジャンプします。
          </p>
        </div>
        <ul className="pl-[2rem] grid grid-cols-1 k-lg:grid-cols-1 gap-8 divide-y-2">
          {companies
            .sort((a, b) => {
              return a.ruby > b.ruby ? 1 : -1;
            })
            .map(({ name, url, img }) => {
              return (
                <li key={name} className="p-4 space-y-6">
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="mb-2 underline text-k-blue-dark"
                    >
                      {name}
                    </a>
                  ) : (
                    <span className="mb-2">{name}</span>
                  )}
                  {img && (
                    <img
                      src={img}
                      alt={name + "広告"}
                      className="w-2/3 m-auto"
                    />
                  )}
                </li>
              );
            })}
        </ul>
      </article>
    </>
  );
}

Company.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="協賛企業一覧" titleEn="Company">
      {page}
    </ArticleLayout>
  );
};

export default Company;
