import { useReducer, useState, VFC } from "react";
import clsx from "clsx";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

const ImgModal: VFC<Props> = (props) => {
  const [isOpen, toggleIsOpen] = useReducer((isOpen) => !isOpen, false);
  return (
    <button onClick={toggleIsOpen}>
      <img src={props.src} alt={props.alt} className="w-full drop-shadow-lg" />
      {isOpen && (
        <div
          className={clsx(
            props.className,
            "z-50 fixed inset-0 w-[100vw] h-[100vh] flex items-center justify-center",
            "pt-[75px] pb-[180px] k-lg:pt-0 k-lg:pb-0",
            "bg-black bg-opacity-50"
          )}
        >
          <img
            src={props.src}
            alt={props.alt}
            className="max-w-[75vw] max-h-[70vh] k-lg:max-h-[80vh]"
          />
        </div>
      )}
    </button>
  );
};

export default ImgModal;
