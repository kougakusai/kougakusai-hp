import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const hpUrl = "#";

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

const SocialLinks: VFC<Props> = (props) => {
  return (
    <div className={clsx("text-black", props.className)}>
      <ul className="flex flex-wrap">
        <li className="flex">
          <a
            title="HomePage"
            href={hpUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            HP
          </a>
        </li>
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

export default SocialLinks;
