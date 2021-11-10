import clsx from "clsx";
import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "src/components/templates/DefaultLayout";
import Subtitle from "src/components/modules/Subtitle";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const announcement = [
  {
    date: "11月06日",
    detail: "2021年度こうがく祭の配信が終了しました。",
  },
  {
    date: "11月05日",
    detail: "企画ページを公開しました。",
  },
];

const headline = (
  <span
    className={clsx(
      "mt-[-35%] k-sm:mt-[-25%] k-lg:mt-[-28%]",
      "pl-[20vw] k-sm:pl-[0vw] k-lg:pl-[0vw]",
      " float-left",
      "text-[5vw] k-sm:text-[4.5vw] k-lg:text-[2.8vw] text-center leading-normal tracking-widest",
      "text-yellow-200 brightness-125 blur-[0.8px] font-bold "
    )}
  >
    2021年の開催は終了しました。
    <br />
    企画のアーカイブ公開中!
    <br />
    <div>
      <Link href={`${prefix}/event/show`}>
        <a className="inline-flex items-center px-[30px] py-[10px] bg-[#fe0e73] text-white rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[8vw] k-sm:w-[6vw] k-lg:w-[2.8vw] h-[8vw] k-sm:h-[6vw] k-lg:h-[2.8vw]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <span>企画を見る</span>
        </a>
      </Link>
    </div>
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
          <section>
            <Subtitle text="茨城大学工学部公式Instagram" />
            <p>茨城大学工学部の公式Instagramアカウントです。茨城大学工学部の最新情報を発信いたします。</p>
            <a
              href="https://instagram.com/ibarakiuniversityhitachi?utm_medium=copy_link"
              className="block pt-3 pt-2 underline text-k-blue-dark cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              茨城大学公式Instagram
            </a>
            <img
              src={`${prefix}/Instagram.png`}
              alt="茨城大学工学部公式InstagramQRコード"
              className="text-center w-3/5 sm:w-[250px] lg:w-[250px]"
            />
          </section>
        </article>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
