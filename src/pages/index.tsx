import clsx from "clsx";
import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "src/components/templates/DefaultLayout";
import Subtitle from "src/components/modules/Subtitle";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const announcement = [
  {
    date: "11月05日",
    detail: "企画ページを公開しました。",
  },

  {
    date: "10月26日",
    detail: "2021年度版HPを公開しました。",
  },
];

const headline = (
  <span
    className={clsx(
      "mt-[-35%] k-sm:mt-[-20%] k-lg:mt-[-18%]",
      "pl-[25vw] k-sm:pl-[6vw] k-lg:pl-[3vw]",
      "w-10/12 k-sm:w-3/4 k-lg:w-full float-left",
      "text-[8vw] k-sm:text-[6vw] k-lg:text-[2.8vw] text-center leading-normal tracking-widest",
      "text-yellow-200 brightness-125 blur-[0.8px] font-bold"
    )}
  >
    オンライン開催
    <br />
    11月06日(土) 10:00配信開始
  </span>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <main>
        <div
          className={clsx(
            "w-full h-0 pt-[200%] bg-center bg-cover bg-no-repeat k-sm:hidden",
            "text-white text-4xl font-bold"
          )}
          style={{ backgroundImage: `url(${prefix}/background_sm.png)` }}
        />
        <div
          className="w-full h-0 pt-[133%] bg-center bg-cover bg-no-repeat hidden k-sm:block k-lg:hidden"
          style={{ backgroundImage: `url(${prefix}/background_md.png)` }}
        />
        <div
          className="w-full h-0 pt-[56.25%] bg-center bg-cover bg-no-repeat hidden k-lg:block"
          style={{ backgroundImage: `url(${prefix}/background_lg.png)` }}
        />
        <h1
          className={clsx(
            "absolute top-[50px] left-[calc(50%-60vw)]",
            "k-sm:top-[15vw] k-sm:left-[calc(50%-32vw)]",
            "k-lg:top-[5vh] k-lg:left-[calc(50%-13vw)] m-auto"
          )}
        >
          <img src={`${prefix}/title.png`} alt="こうがく祭" className="w-full k-sm:w-[58vw] k-lg:w-[40vw]" />
          {headline}
        </h1>
        <article
          className={clsx(
            "k-lg:w-[calc(100%-20vw)] k-lg:min-h-[500px] k-lg:ml-auto p-[10%] k-lg:py-[5%] k-lg:pl-[7%] k-lg:pr-[20%]",
            "space-y-[50px] text-[1.8rem] bg-white items-center"
          )}
        >
          <section>
            <Subtitle text="こうがく祭とは" />
            <p>こうがく祭は毎年11月に開催される茨城大学工学部の学園祭です。</p>
            <p>
              工学部ならではの企画や研究室公開などがあり、毎年一般の方や学生の方含め多くの方にご来場いただいております。
            </p>
            <p>
              今年度はオンラインでの開催となりました。詳しくは
              <Link href="/about">
                <a className="underline text-k-blue-dark cursor-pointer">オンライン開催について</a>
              </Link>
              をご覧ください。
            </p>
          </section>
          <section>
            <Subtitle text="お知らせ" />
            <table>
              {announcement.map(({ date, detail }) => {
                return (
                  <tr key={date} className="align-text-top leading-[28px]">
                    <td className="whitespace-nowrap pr-[30px]">{date}</td>
                    <td className="pb-[10px]">{detail}</td>
                  </tr>
                );
              })}
            </table>
          </section>
        </article>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
