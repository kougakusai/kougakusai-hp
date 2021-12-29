import clsx from 'clsx';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from 'src/components/templates/DefaultLayout';
import Subtitle from 'src/components/modules/Subtitle';
import { prefix } from 'src/utils/constants';

const announcement = [
  {
    date: '11月06日',
    detail: '2021年度こうがく祭の配信が終了しました。',
  },
  {
    date: '11月05日',
    detail: '企画ページを公開しました。',
  },
];

const headline = (
  <span
    className={clsx(
      'mt-[-35%] k-sm:mt-[-25%] k-lg:mt-[-28%]',
      'pl-[20vw] k-sm:pl-[0vw] k-lg:pl-[0vw]',
      ' float-left',
      'text-[5vw] k-sm:text-[4.5vw] k-lg:text-[2.8vw] text-center leading-normal tracking-widest',
      'text-yellow-200 brightness-125 text-shadow-lg font-bold '
    )}
  >
    2021年の開催は終了しました。
    <br />
    企画のアーカイブ公開中!
    <br />
    <div>
      <Link href="/event/show">
        <a className="inline-flex items-center py-[10px] px-[30px] text-white bg-[#fe0e73] rounded-lg">
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
          <span className="text-shadow-none">企画を見る</span>
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
            'k-sm:hidden pt-[200%] w-full h-0 bg-center bg-no-repeat bg-cover',
            'text-4xl font-bold text-white'
          )}
          style={{ backgroundImage: `url(${prefix}/background_sm.png)` }}
        />
        <div
          className="hidden k-sm:block k-lg:hidden pt-[133%] w-full h-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${prefix}/background_md.png)` }}
        />
        <div
          className="hidden k-lg:block pt-[56.25%] w-full h-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${prefix}/background_lg.png)` }}
        />
        <h1
          className={clsx(
            'absolute top-[50px] left-[calc(50%-60vw)]',
            'k-sm:top-[15vw] k-sm:left-[calc(50%-32vw)]',
            'k-lg:top-[5vh] k-lg:left-[calc(50%-13vw)] m-auto'
          )}
        >
          <img
            src={`${prefix}/title.png`}
            alt="こうがく祭"
            className="w-full k-sm:w-[58vw] k-lg:w-[40vw]"
          />
          {headline}
        </h1>
        <article
          className={clsx(
            'p-[10%] k-lg:py-[5%] k-lg:pr-[20%] k-lg:pl-[7%] k-lg:ml-auto k-lg:w-[calc(100%-20vw)] k-lg:min-h-[500px]',
            'items-center space-y-[50px] text-[1.8rem] bg-white'
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
                <a className="underline cursor-pointer text-k-blue-dark">
                  オンライン開催について
                </a>
              </Link>
              をご覧ください。
            </p>
          </section>
          <section>
            <Subtitle text="お知らせ" />
            <table>
              {announcement.map(({ date, detail }) => {
                return (
                  <tr key={date} className="leading-[28px] align-text-top">
                    <td className="pr-[30px] whitespace-nowrap">{date}</td>
                    <td className="pb-[10px]">{detail}</td>
                  </tr>
                );
              })}
            </table>
          </section>
          <section>
            <Subtitle text="茨城大学工学部公式Instagram" />
            <p>
              茨城大学工学部の公式Instagramアカウントです。茨城大学工学部の最新情報を発信いたします。
            </p>
            <a
              href="https://instagram.com/ibarakiuniversityhitachi?utm_medium=copy_link"
              className="block pt-2 underline cursor-pointer text-k-blue-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              茨城大学公式Instagram
            </a>
            <img
              src={`${prefix}/Instagram.png`}
              alt="茨城大学工学部公式InstagramQRコード"
              className="w-3/5 sm:w-[250px] lg:w-[250px] text-center"
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
