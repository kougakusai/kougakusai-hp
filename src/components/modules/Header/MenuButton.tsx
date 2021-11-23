import { VFC } from 'react';
import clsx from 'clsx';

type Props = {
  isExpand: boolean;
  toggleIsExpand: () => void;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const MenuButton: VFC<Props> = (props) => {
  return (
    <div className={clsx('relative w-[150px]', props.className)}>
      <img src={`${prefix}/menuButton.svg`} alt="MenuToggleButton" />

      <button
        className="absolute top-[calc(50%-25px)] left-[calc(50%-35px)] w-[70px] h-[60px]"
        onClick={props.toggleIsExpand}
      >
        <div
          className={clsx(
            'absolute left-[calc(50%-27px)] w-[50px] h-px bg-white duration-[400ms] ease-in-out transform',
            props.isExpand ? 'top-[20px] rotate-[225deg]' : 'top-[6px]'
          )}
        />
        <div
          className={clsx(
            'absolute top-[20px] left-[calc(50%-27px)] w-[50px] h-px bg-white duration-[400ms] ease-in-out transform',
            { 'rotate-[225deg] bg-transparent': props.isExpand }
          )}
        />
        <div
          className={clsx(
            'absolute left-[calc(50%-27px)] w-[50px] h-px bg-white duration-[400ms] ease-in-out transform',
            props.isExpand ? 'top-[20px] rotate-[135deg]' : 'top-[34px]'
          )}
        />

        <img
          src={`${prefix}/menuText.svg`}
          alt="MenuText"
          width="55px"
          className="absolute top-[40px] left-[calc(50%-30px)]"
        />
      </button>
    </div>
  );
};

export default MenuButton;
