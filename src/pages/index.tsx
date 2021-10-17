import clsx from "clsx";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <main className="k-lg:w-[calc(100%-20vw)] ml-auto">
        {/* <div className={clsx("flex items-center justify-center")}>
          <div
            className={clsx(
              "w-full h-[737px] k-sm:h-[1366px] k-lg:h-[1080px] flex",
              "bg-center bg-cover bg-origin-content box-border bg-no-repeat",
              "bg-pre-sm k-sm:bg-pre-md k-lg:bg-pre-lg text-center"
            )}
          >
            <h1 className="items-center">
              <img src="/title.png" className="border-none" />
            </h1>
          </div>
        </div> */}
        <article
          className={clsx(
            "p-[10%] k-lg:py-[5%] k-lg:pl-[7%] k-lg:pr-[20%] k-lg:min-h-[500px]",
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
                <a>オンライン開催について</a>
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
};

export default Home;
