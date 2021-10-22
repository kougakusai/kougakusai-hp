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
    imagePath: "/instagram.png",
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
              >
                <img src={prefix + imagePath} alt={title} width="44px" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SNSButtons;
