import type { VFC } from "react";
import clsx from "clsx";
import TwitterIcon from "./SVG/Twitter";
import InstagramIcon from "./SVG/Instagram";
import NoteIcon from "./SVG/Note";

type Props = {
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const iconSize = " w-[32px] h-[32px] m-auto";

const accounts = [
  {
    title: "Twitter",
    url: "https://twitter.com/kougakufes",
    image: (
      <TwitterIcon
        className={"hover:text-[#1D9BF0] duration-[400ms]" + iconSize}
      />
    ),
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/kougakufes/",
    image: <InstagramIcon className={iconSize} />,
  },
  {
    title: "note",
    url: "https://note.com/mtea/m/m4e45de2664ba/",
    image: (
      <NoteIcon
        className={"hover:text-[#41C9B4] duration-[400ms]" + iconSize}
      />
    ),
  },
];

const SNSButtons: VFC<Props> = (props) => {
  return (
    <div className={clsx("text-white", props.className)}>
      <p className="mb-[10px] k-lg:mb-[15px]">FOLLOW US</p>
      <ul className="flex flex-wrap">
        {accounts.map(({ title, url, image }) => {
          return (
            <li key={title} className="flex">
              <a
                title={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[44px] h-[44px] p-[6px] "
              >
                {image}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SNSButtons;
