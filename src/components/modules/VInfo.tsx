import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};

const VInfo: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        "px-[72px] py-[10px] text-[1.2rem] tracking-[1px] font-bold k-lg:font-black",
        "origin-top-left transform rotate-90",
        props.className
      )}
    >
      <div className="absolute w-[60px] top-[19px] bottom-[17px] left-0 border-t border-black" />
      <div>{props.text}</div>
    </div>
  );
};

export default VInfo;
