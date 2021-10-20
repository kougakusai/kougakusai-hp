import { VFC } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

const EventDay: VFC<Props> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <div className="z-10 w-[120px] h-[120px] relative k-lg:scale-[1.48] k-lg:top-[29px] k-lg:right-[29px]">
        {/* ↓navy polygon: z-index=30*/}
        <div
          className={clsx(
            "z-30 top-0 right-0",
            "bg-k-navy-dark w-[117px] h-[76px] absolute mb-[33px]",
            "flex justify-center items-center",
            "after:w-[117px] after:h-0 after:absolute after:bottom-0 after:left-0",
            "after:border-t-k-navy-dark after:border-t-[41px]" /* div本体―after間に隙間ができることの防止 */,
            "after:border-l-[40px] after:border-l-transparent",
            "after:border-r-0 after:border-b-0",
            "after:top-[99%]" /* div本体―after間に隙間ができることの防止 */
          )}
        >
          {/* ↓開催日表示テキスト:z-index=30 */}
          <div className="z-30 k-lg:scale-[0.9] text-center translate-x-[5px] translate-y-[20px] text-[#94DD26] text-4xl font-medium slashed-zero brightness-125 saturate-200 glitch">
            <p className="font-bold tracking-[0.8rem]">開催</p>
            <p className="font-semibold tracking-[0.5rem]">2021</p>
            <p>11.06</p>
          </div>
        </div>
        {/* ↓lime polygon:z-index=20 */}
        <div
          className={clsx(
            "z-20",
            "bg-[#94DD26] w-[120px] h-[79px] absolute mb-[40px] top-0",
            "after:w-[120px] after:h-0 after:absolute after:bottom-0 after:left-0",
            "after:border-t-[#94DD26] after:border-t-[41px]" /* div本体―after間に隙間ができることの防止 */,
            "after:border-l-[40px] after:border-l-transparent",
            "after:border-r-0 after:border-b-0",
            "after:top-[99%]" /* div本体―after間に隙間ができることの防止 */
          )}
        />
      </div>
    </div>
  );
};

export default EventDay;

//  CSS造形参考：[https://www.penseur.co.jp/blog/penseur/557/], [https://css-tricks.com/the-shapes-of-css/#octagon-shape]
