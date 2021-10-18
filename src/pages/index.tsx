import type { ReactElement } from "react";
import Head from "next/head";
import DefaultLayout from "src/components/templates/DefaultLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>2020年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <main>
        <p>pages:index</p>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
