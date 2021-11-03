import type { VFC } from "react";
import clsx from "clsx";

type Props = {
  name?: string;
  hp?: string;
  twitter?: string;
  instagram?: string;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SocialLinks: VFC<Props> = (props) => {
  const accounts = [
    {
      title: `${props.name}のTwitter`,
      url: props.twitter,
      imagePath: "/twitter.svg",
    },
    {
      title: `${props.name}のInstagram`,
      url: props.instagram,
      imagePath: "/instagram.png",
    },
  ];

  return (
    <div className={clsx("text-black", props.className)}>
      <ul className="flex flex-wrap space-x-4">
        <li className="flex">
          <a
            title={props.name + "のHomePage"}
            href={props.hp}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}のHP
          </a>
        </li>
        {accounts.map(({ title, url, imagePath }) => {
          if (url) {
            return (
              <li key={title} className="flex">
                <a
                  title={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={prefix + imagePath}
                    alt={title}
                    width="44px"
                    className="bg-[#1DA1F2]"
                  />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
