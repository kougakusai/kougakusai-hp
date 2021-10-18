import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};

const VTitleBand: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        "bg-k-navy-light text-white w-[116px] h-screen",
        props.className
      )}
    >
      <div
        className="relative w-[1080px] h-[110px] origin-bottom-left transform rotate-90"
        style={{ backgroundImage: "url('./rect.svg')" }}
      >
        <div className="absolute top-[40%] left-[20vh] text-white text-[3.5rem] font-semibold">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default VTitleBand;
