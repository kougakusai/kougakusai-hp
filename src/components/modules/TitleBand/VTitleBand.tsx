import type { VFC } from 'react';
import clsx from 'clsx';

type Props = {
  text: string;
  className?: string;
};

const VTitleBand: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        'w-[116px] h-screen text-white bg-k-navy-light',
        props.className
      )}
    >
      <div
        className="relative w-[1080px] h-[110px] transform origin-bottom-left rotate-90"
        style={{ backgroundImage: "url('/rect.svg')" }}
      >
        <div className="absolute top-[40%] left-[20vh] text-[3.5rem] font-semibold text-white">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default VTitleBand;
