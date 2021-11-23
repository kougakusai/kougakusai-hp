import type { VFC } from 'react';
import clsx from 'clsx';

type Props = {
  text: string;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const HTitleBand: VFC<Props> = (props) => {
  return (
    <div
      className={clsx(
        'flex w-full h-[75px] text-white bg-k-navy-light',
        'k-lg:pl-[5%] k-lg:w-[calc(100%-20vw)] k-lg:h-[110px]',
        props.className
      )}
      style={{ backgroundImage: "url('/rect.svg')" }}
    >
      <img src={`${prefix}/decoration.svg`} alt="" className="w-[40px]" />
      <h2
        className={clsx(
          'pb-[2px] ml-[5px] text-[1.8rem] font-black leading-[75px]',
          'k-lg:text-[2.5rem] k-lg:font-extrabold k-lg:leading-[110px]'
        )}
      >
        {props.text}
      </h2>
    </div>
  );
};

export default HTitleBand;
