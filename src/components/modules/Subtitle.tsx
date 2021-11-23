import type { VFC } from 'react';

type Props = {
  text: string;
};

const Subtitle: VFC<Props> = (props) => {
  return (
    <h2 className="py-[0.25em] px-[0.5em] mb-[30px] text-[2rem] font-bold border-l-[5px] border-k-sky text-k-gray-light">
      {props.text}
    </h2>
  );
};

export default Subtitle;
