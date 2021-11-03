import type { ReactElement } from "react";
import Head from "next/head";
import clsx from "clsx";
import ArticleLayout from "src/components/templates/ArticleLayout";
import Subtitle from "src/components/modules/Subtitle";
import Picture from "src/components/modules/Exhibition/Picture";
import SocialLinks from "src/components/modules/Exhibition/SocialLinks";

const expireDate = "2021-11-07T24:00:00+0900"; //ポストカード期限

const isAvail =
  new Date().getTime() <= new Date(expireDate).getTime() ? true : false;

const info = {
  name: "Group Name",
  link: {
    hp: "#",
    twitter: "#",
  },

  contents: [
    {
      title: "Crystal",
      picPath:
        "https://images.freeimages.com/images/large-previews/254/the-perfection-of-nature-1180807.jpg",
      pn: "Lorenzo S.",
      pcCode: "1246",
      isAvail: isAvail,
    },
    {
      title: "Thunder Tree",
      picPath:
        "https://images.freeimages.com/images/large-previews/d48/power-of-nature-1313497.jpg",
      pn: "Ronny Beliën",
    },
    {
      title: "Water Lay",
      picPath:
        "https://images.freeimages.com/images/large-previews/f8f/natural-bridge-1575703.jpg",
      pn: "wendy domeni",
      pcCode: "0348",
      isAvail: isAvail,
    },
  ],
};

export default function Exhibition() {
  const weekDaysKs = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative text-[1.5rem] k-lg:text-[1.8rem] top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)]">
        <section className="flex-col text-[1.5rem] k-lg:text-[1.8rem] p-4">
          <Subtitle text={`${info.name}展示`} />
          <p>Some introduction...</p>
          <div className="border-2">
            <span>{info.name}</span>
            <SocialLinks
              name={info.name}
              hp={info.link.hp}
              twitter={info.link.twitter}
            />
            <br />
            {isAvail && (
              <span>
                ポストカード印刷有効期限：
                {new Date(expireDate).getMonth()}月
                {new Date(expireDate).getDate()}日（
                {weekDaysKs[new Date(expireDate).getDay()]}）
                {new Date(expireDate).getHours()}時
                {new Date(expireDate).getMinutes()}分 迄
              </span>
            )}
          </div>
        </section>
        <hr className="border-2 my-8" />
        <section className={clsx("w-full h-full", "space-y-24 divide-y-2")}>
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

Exhibition.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout
      titleJa={`${info.name}展示`}
      titleEn={`${info.name} Exhibition`}
    >
      {page}
    </ArticleLayout>
  );
};
