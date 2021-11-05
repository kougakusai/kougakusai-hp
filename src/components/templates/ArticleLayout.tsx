import type { ReactNode, VFC } from "react";
import clsx from "clsx";
import Header from "src/components/modules/Header/Header";
import Footer from "src/components/modules/Footer/Footer";
import EventDay from "../modules/EventDay";
import HTitleBand from "../modules/TitleBand/HTitleBand";
import VTitleBand from "../modules/TitleBand/VTitleBand";
import VInfo from "../modules/VInfo";

type Props = {
  children: ReactNode;
  titleJa: string;
  titleEn: string;
};

const ArticleLayout: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      <EventDay className="absolute lg:fixed top-0 right-0 z-20" />
      <HTitleBand text={props.titleJa} className="absolute top-0 right-0 z-10" />
      <VTitleBand text={props.titleEn} className="fixed right-0 top-[110px] hidden k-lg:block" />
      <main
        className={clsx(
          "bg-white min-h-[calc(100vh-110px)]",
          "mt-[75px] mr-0 px-[10%] pt-[15%] pb-[10%]",
          "k-lg:w-[calc(100%-20vw)]",
          "k-lg:mt-[110px] k-lg:ml-auto k-lg:pr-[20%] k-lg:pl-[7%] k-lg:py-[3%]"
        )}
      >
        <VInfo text={props.titleEn} />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default ArticleLayout;
