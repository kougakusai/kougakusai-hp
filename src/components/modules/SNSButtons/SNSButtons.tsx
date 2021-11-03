import type { VFC } from "react";
import clsx from "clsx";
import TwitterIcon from "./Twitter";
import InstagramIcon from "./Instagram";
import NoteIcon from "./Note";

type Props = {
  className?: string;
};

const iconSize = " w-[32px] h-[32px] m-auto";

const accounts = [
  {
    title: "Twitter",
    url: "https://twitter.com/kougakufes",
    icon: <TwitterIcon className={iconSize} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/kougakufes/",
    icon: <InstagramIcon className={iconSize} />,
  },
  {
    title: "note",
    url: "https://note.com/mtea/m/m4e45de2664ba/",
    icon: <NoteIcon className={iconSize} />,
  },
];

const SNSButtons: VFC<Props> = (props) => {
  return (
    <div className={clsx("text-white", props.className)}>
      <p className="mb-[10px] k-lg:mb-[15px]">FOLLOW US</p>
      <ul className="flex flex-wrap">
        {accounts.map(({ title, url, icon }) => {
          return (
            <li key={title} className="flex">
              <a
                title={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[44px] h-[44px] p-[6px] "
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SNSButtons;
