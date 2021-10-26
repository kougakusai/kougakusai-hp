import type { ReactElement } from "react";
import Head from "next/head";
import ArticleLayout from "src/components/templates/ArticleLayout";
import YTLive from "src/components/modules/Live/YTLive";
import Subtitle from "src/components/modules/Subtitle";

const Lives = [
  {
    status: "Upcoming",
    id: "SG_vqlb1pOQ",
  },
  {
    status: "Continue",
    id: "5qap5aO4i9A",
  },
  {
    status: "Ended",
    id: "NJ-juLXoFxM",
  },
];

function Live() {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)] text-[1.5rem] k-lg:text-[1.8rem]">
        {Lives.map(({ status, id }) => {
          return (
            <section className="mb-16" key={status}>
              <Subtitle text={status} />
              <YTLive id={id} />
            </section>
          );
        })}
      </article>
    </>
  );
}

Live.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="ライブストリーム" titleEn="Live Streaming">
      {page}
    </ArticleLayout>
  );
};

export default Live;
