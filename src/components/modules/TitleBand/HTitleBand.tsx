import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const HTitleBand: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        "bg-k-navy-light text-white w-full h-[75px] flex",
        "k-lg:w-[calc(100%-20vw)] k-lg:h-[110px] k-lg:pl-[5%]",
        props.className
      )}
      style={{ backgroundImage: "url('/rect.svg')" }}
    >
      <img src={`${prefix}/decoration.svg`} className="w-[40px]" />
      <h2
        className={clsx(
          "pb-[2px] ml-[5px] text-[1.8rem] leading-[75px] font-black",
          "k-lg:text-[2.5rem] k-lg:leading-[110px] k-lg:font-extrabold"
        )}
      >
        {props.text}
      </h2>
    </div>
  );
};

export default HTitleBand;
