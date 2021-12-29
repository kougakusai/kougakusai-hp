import type { VFC } from 'react';
import clsx from 'clsx';

type Props = {
  text: string;
  className?: string;
};

const VInfo: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        'py-[10px] px-[72px] text-[1.2rem] font-bold k-lg:font-black tracking-[1px]',
        'transform origin-top-left rotate-90',
        props.className
      )}
    >
      <div className="absolute top-[19px] bottom-[17px] left-0 w-[60px] border-t border-black" />
      <div>{props.text}</div>
    </div>
  );
};

export default VInfo;
