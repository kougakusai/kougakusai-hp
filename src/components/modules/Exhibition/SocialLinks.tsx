import type { VFC } from "react";
import clsx from "clsx";
import TwitterIcon from "../SNSButtons/Twitter";
import InstagramIcon from "../SNSButtons/Instagram";

type Props = {
  name?: string;
  hp?: string;
  twitter?: string;
  instagram?: string;
  className?: string;
};

const SocialLinks: VFC<Props> = (props) => {
  const accounts = [
    {
      title: `${props.name}のHP`,
      url: props.hp,
    },
    {
      title: `${props.name}のTwitter`,
      url: props.twitter,
      icon: <TwitterIcon className="w-16 h-16 m-auto text-[#1D9BF0]" />,
    },
    {
      title: `${props.name}のInstagram`,
      url: props.instagram,
      icon: <InstagramIcon className="w-16 h-16 m-auto" />,
    },
  ];

  return (
    <ul
      className={clsx(
        props.className,
        "flex flex-wrap justify-evenly mb-4 mx-4 text-black"
      )}
    >
      {accounts.map(({ title, url, icon }) => {
        return (
          url && (
            <li key={title} className="flex w-16">
              <a
                title={title}
                href={url}
                className="text-[20px] w-full underline text-k-blue-dark text-center align-middle"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon || "HP"}
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default SocialLinks;
