import { VFC } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

const EventDay: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        "z-10 absolute top-0 right-0 k-lg:top-[25px] k-lg:right-[25px] k-lg:scale-150",
        props.className
      )}
    >
      <div className="w-[100px] h-[100px]">
        <div
          className={clsx(
            "z-30 top-0 right-0",
            "bg-k-navy-dark w-[95px] h-[65px] absolute mb-[15px]",
            "flex justify-center items-center",
            "after:w-[95px] after:h-0 after:absolute after:bottom-0 after:left-0",
            "after:border-t-k-navy-dark after:border-t-[30px]",
            "after:border-l-[30px] after:border-l-transparent",
            "after:border-r-0 after:border-b-0",
            "after:top-[99%]"
          )}
        >
          {/* ↓開催日表示 */}
          <div className="text-[#94DD26] text-xl font-semibold text-center translate-y-[15px] z-30 brightness-125 saturate-200 glitch">
            開催
            <br />
            2021
            <br />
            11.06
          </div>
        </div>
        <div
          className={clsx(
            "z-20",
            "bg-[#94DD26] w-[100px] h-[70px] absolute mb-[40px] top-0",
            "after:w-[100px] after:h-0 after:absolute after:bottom-0 after:left-0",
            "after:border-t-[#94DD26] after:border-t-[30px]",
            "after:border-l-[30px] after:border-l-transparent",
            "after:border-r-0 after:border-b-0",
            "after:top-full"
          )}
        />
      </div>
    </div>
  );
};

export default EventDay;

//  CSS造形参考：[https://www.penseur.co.jp/blog/penseur/557/], [https://css-tricks.com/the-shapes-of-css/#octagon-shape]
