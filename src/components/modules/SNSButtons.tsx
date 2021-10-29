import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const accounts = [
  {
    title: "Twitter",
    url: "https://twitter.com/kougakufes",
    imagePath: "/twitter.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/kougakufes/",
    imagePath: "/instagram.svg",
  },
  {
    title: "note",
    url: "https://note.com/mtea/m/m4e45de2664ba/",
    imagePath: "/note.svg",
  },
];

const SNSButtons: VFC<Props> = (props) => {
  return (
    <div className={clsx("text-white", props.className)}>
      <p className="mb-[10px] k-lg:mb-[15px]">FOLLOW US</p>
      <ul className="flex flex-wrap">
        {accounts.map(({ title, url, imagePath }) => {
          return (
            <li key={title} className="flex">
              <a
                title={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[44px] h-[44px] p-[6px] text-center items-center"
              >
                <img
                  src={prefix + imagePath}
                  alt={title}
                  width="32px"
                  className="h-[32px] m-auto"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SNSButtons;
