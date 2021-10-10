import type { ReactNode, VFC } from "react";
import Header from "src/components/modules/Header/Header";
import Footer from "src/components/modules/Footer/Footer";

type Props = {
  children: ReactNode;
};

const DefaultLayout: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
