import type { VFC } from "react";

type Props = {
  text: string;
};

const Subtitle: VFC<Props> = (props) => {
  return (
    <h2 className="text-k-gray-light text-[2rem] font-bold border-l-[5px] border-k-sky px-[0.5em] py-[0.25em] mb-[30px]">
      {props.text}
    </h2>
  );
};

export default Subtitle;
