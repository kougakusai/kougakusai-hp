import type { VFC } from "react";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

type Props = {
  isExpand: boolean;
  toggleIsExpand: () => void;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const MenuButton: VFC<Props> = (props) => {
  return (
    <div className={clsx("relative w-[150px]", props.className)}>
      <img src={`${prefix}/menuButton.svg`} alt="MenuToggleButton" />
      <button
        className="absolute w-[70px] h-[60px] top-[calc(50%-25px)] left-[calc(50%-35px)]"
        onClick={props.toggleIsExpand}
      >
        <CSSTransition
          in={props.isExpand}
          timeout={400}
          classNames="menu-btn-top"
        >
          <div className="absolute bg-white w-[50px] h-px top-[6px] left-[calc(50%-27px)]" />
        </CSSTransition>
        <CSSTransition
          in={props.isExpand}
          timeout={400}
          classNames="menu-btn-middle"
        >
          <div className="absolute bg-white w-[50px] h-px top-[20px] left-[calc(50%-27px)]" />
        </CSSTransition>
        <CSSTransition
          in={props.isExpand}
          timeout={400}
          classNames="menu-btn-bottom"
        >
          <div className="absolute bg-white w-[50px] h-px top-[34px] left-[calc(50%-27px)]" />
        </CSSTransition>
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
