import type { ReactElement } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import ArticleLayout from 'src/components/templates/ArticleLayout';
import Subtitle from 'src/components/modules/Subtitle';
import Picture from 'src/components/modules/Exhibition/Picture';
import SocialLinks from 'src/components/modules/Exhibition/SocialLinks';

// const expireDate = "11月06日(土)";

const isAvail = false;

const info = {
  name: '漫画研究会',
  nameen: 'IUCA',
  link: {
    twitter: 'https://twitter.com/iuca_unofficial',
  },
  introduction: '茨城大学漫画研究会の作品展示です。',
  pcexp: (
    <>
      ポストカードへの印刷は終了しました。
      <br />
    </>
  ),

  contents: [
    {
      title: '勝利の鼓動',
      picPath:
        'https://drive.google.com/uc?id=1ABRshTDa-iXN5ddEKrDK-ost1LOHvPSN',
      pn: '飛燕',
    },
    {
      title: '四年間のあとがき',
      picPath:
        'https://drive.google.com/uc?id=1IikyebIWPUphOsKYKewYjKsxVngzDYOq',
      pn: '植物好きの人',
    },
    {
      title: '対空番長',
      picPath:
        'https://drive.google.com/uc?id=1DU6jT3-koFTCpF0l9dvsrj9rw-tqI5v4',
      pn: 'arutoron',
    },
    {
      title: '躍動トリオ',
      picPath:
        'https://drive.google.com/uc?id=10ygdB1SnFhGaB6rmKKmbmCWW3_BodjtD',
      pn: '抹茶ソーダ',
    },
    {
      title: 'Tell Your World',
      picPath:
        'https://drive.google.com/uc?id=1HPO-ySJEgXnu38xId78MxJby1_5ewzyJ',
      pn: 'メイユー',
      pcCode: 'LNFB7CUT',
      isAvail: isAvail,
    },
    {
      title: '鳴神',
      picPath:
        'https://drive.google.com/uc?id=1Ea0hx1YBrgcKtGRQCAddxHoeeCyhg33K',
      pn: '光',
      pcCode: '45Q488QK',
      isAvail: isAvail,
    },
  ],
};

export default function Mangakenkyukai() {
  const weekDaysKs = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)] text-[1.5rem] k-lg:text-[1.8rem]">
        <section className="flex-col p-4 text-[1.5rem] k-lg:text-[1.8rem]">
          <div className="flex">
            <Subtitle text={`${info.name}展示`} />
            <div className="float-right text-center">
              {/* <span>{info.name}</span> */}
              <SocialLinks name={info.name} twitter={info.link.twitter} />
            </div>
          </div>
          <div>
            <p>{info.introduction}</p>
            <br />
            <p>{info.pcexp}</p>
          </div>
          {/* (<br />
          {isAvail && (
            <span>
              {/* ポストカード印刷有効期限：{expireDate} */}
          {/* {new Date(expireDate).getMonth()}月
              {new Date(expireDate).getDate()}日（
              {weekDaysKs[new Date(expireDate).getDay()]}）
              {new Date(expireDate).getHours()}時
              {new Date(expireDate).getMinutes()}分 迄 */}
          {/*</span>
          ) */}
        </section>
        <hr className="mt-8 mb-16 border-2" />
        <section className={clsx('w-full h-full', 'space-y-24 divide-y-2')}>
          {info.contents.map(({ title, picPath, pn, pcCode, isAvail }) => {
            return (
              <Picture
                title={title}
                src={picPath}
                author={pn}
                postcard={pcCode}
                avail={isAvail}
                key={title}
              />
            );
          })}
        </section>
      </article>
    </>
  );
}

Mangakenkyukai.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout
      titleJa={`企画｜${info.name}`}
      titleEn={`Event | ${info.nameen}`}
    >
      {page}
    </ArticleLayout>
  );
};
