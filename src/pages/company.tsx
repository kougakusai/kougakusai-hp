import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import ArticleLayout from "src/components/templates/ArticleLayout";
import Subtitle from "src/components/modules/Subtitle";

const companies = [
  {
    name: "茨大工業株式会社",
  },
  {
    name: "工学部システムズ",
  },
  {
    name: "こうがく祭商事",
  },
  {
    name: "株式会社ユニキャスト",
    pageUrl: "https://www.unicast.ne.jp/",
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
          <Subtitle text="ご協賛いただいた企業一覧（敬称略・順不同）" />
          <p className="p-[6px]">
            下線、色付きのご協賛企業名はクリック／タップしていただくと、各企業のホームページへジャンプします。
          </p>
        </div>
        <ul className="list-disc pl-[2rem] space-y-[20px]">
          {companies.map(({ name, pageUrl }) => {
            if (pageUrl) {
              return (
                <li key={name}>
                  <a
                    href={pageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-k-blue-dark"
                  >
                    {name}
                  </a>
                </li>
              );
            } else {
              return <li key={name}>{name}</li>;
            }
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
