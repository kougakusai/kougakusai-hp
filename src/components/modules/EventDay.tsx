import { VFC } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

const EventDay: VFC<Props> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <div className="relative k-lg:top-[29px] k-lg:right-[29px] z-10 w-[120px] h-[120px] k-lg:scale-[1.48]">
        {/* ↓navy polygon: z-index=30*/}
        <div
          className={clsx(
            'top-0 right-0 z-30',
            'absolute mb-[33px] w-[117px] h-[76px] bg-k-navy-dark',
            'flex justify-center items-center',
            'after:absolute after:bottom-0 after:left-0 after:w-[117px] after:h-0',
            'after:border-t-[41px] after:border-t-k-navy-dark' /* div本体―after間に隙間ができることの防止 */,
            'after:border-l-[40px] after:border-l-transparent',
            'after:border-r-0 after:border-b-0',
            'after:top-[99%]' /* div本体―after間に隙間ができることの防止 */
          )}
        >
          {/* ↓開催日表示テキスト:z-index=30 */}
          <div className="z-30 text-4xl font-bold slashed-zero text-center text-[#94DD26] brightness-125 saturate-200 k-lg:scale-[0.9] translate-x-[5px] translate-y-[20px] glitch">
            <p className="tracking-[0.8rem]">企画</p>
            <p className="tracking-[0.8rem]">展示中</p>
          </div>
        </div>
        {/* ↓lime polygon:z-index=20 */}
        <div
          className={clsx(
            'z-20',
            'absolute top-0 mb-[40px] w-[120px] h-[79px] bg-[#94DD26]',
            'after:absolute after:bottom-0 after:left-0 after:w-[120px] after:h-0',
            'after:border-t-[41px] after:border-t-[#94DD26]' /* div本体―after間に隙間ができることの防止 */,
            'after:border-l-[40px] after:border-l-transparent',
            'after:border-r-0 after:border-b-0',
            'after:top-[99%]' /* div本体―after間に隙間ができることの防止 */
          )}
        />
      </div>
    </div>
  );
};

export default EventDay;

//  CSS造形参考：[https://www.penseur.co.jp/blog/penseur/557/], [https://css-tricks.com/the-shapes-of-css/#octagon-shape]
