import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

const Accounts = [
  {
    title: "Twitter",
    url: "https://twitter.com/kougakufes",
    imagePath: "./twitter.svg",
  },
];

const SNSButtons: VFC<Props> = (props) => {
  return (
    <div className={clsx("text-white", props.className)}>
      <p className="mb-[10px] k-lg:mb-[15px]">FOLLOW US</p>
      <ul className="flex flex-wrap">
        {Accounts.map(({ title, url, imagePath }) => {
          return (
            <li key={title} className="flex">
              <a
                title={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imagePath} alt={title} width="44px" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SNSButtons;
