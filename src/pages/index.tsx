import clsx from "clsx";
import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "src/components/templates/DefaultLayout";
import Subtitle from "src/components/modules/Subtitle";

const announce = [
  {
    date: "11月06日",
    detail: "こうがく祭開催予定",
  },
  {
    date: "10月06日",
    detail: "開催1ヵ月前",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <main>
        <div
          className="w-full h-0 pt-[200%] bg-center bg-cover bg-no-repeat k-sm:hidden"
          style={{ backgroundImage: "url(./background_pre_sm.png)" }}
        />
        <div
          className="w-full h-0 pt-[133%] bg-center bg-cover bg-no-repeat hidden k-sm:block k-lg:hidden"
          style={{ backgroundImage: "url(./background_pre_md.png)" }}
        />
        <div
          className="w-full h-0 pt-[56.25%] bg-center bg-cover bg-no-repeat hidden k-lg:block"
          style={{ backgroundImage: "url(./background_pre_lg.png)" }}
        />
        <h1
          className={clsx(
            "absolute top-[50px] left-[calc(50%-60vw)]",
            "k-sm:top-[15vw] k-sm:left-[calc(50%-32vw)]",
            "k-lg:top-[5vh] k-lg:left-[calc(50%-13vw)] m-auto"
          )}
        >
          <img
            src="./title.png"
            alt="こうがく祭"
            className="w-full k-sm:w-[58vw] k-lg:w-[40vw]"
          />
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
              工学部ならではの企画や研究室公開などがあり、毎年一般の方や学生の方含め多くの方にご来場していただいております。
            </p>
            <p>
              詳しくは
              <Link href="/about">
                <a className="underline text-k-blue-dark cursor-pointer">
                  オンライン開催について
                </a>
              </Link>
              をご覧ください。
            </p>
          </section>
          <section>
            <Subtitle text="お知らせ" />
            <ul>
              {announce.map(({ date, detail }) => {
                return (
                  <li className="h-[38px] leading-[38px]" key={date}>
                    <span className="w-[150px] mr-[30px]">{date}</span>
                    <span>{detail}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
