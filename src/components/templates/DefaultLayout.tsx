import type { ReactNode, VFC } from 'react';
import Header from 'src/components/modules/Header/Header';
import Footer from 'src/components/modules/Footer/Footer';
import EventDay from 'src/components/modules/EventDay';

type Props = {
  children: ReactNode;
};

const DefaultLayout: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      <EventDay className="fixed top-0 right-0" />
      {props.children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
