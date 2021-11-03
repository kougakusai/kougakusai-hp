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

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SocialLinks: VFC<Props> = (props) => {
  const accounts = [
    {
      title: `${props.name}のHP`,
      url: props.hp,
    },
    {
      title: `${props.name}のTwitter`,
      url: props.twitter,
      icon: <TwitterIcon className="w-[32px] h-[32px] m-auto text-[#1D9BF0]" />,
    },
    {
      title: `${props.name}のInstagram`,
      url: props.instagram,
      icon: <InstagramIcon className="w-[32px] h-[32px] m-auto" />,
    },
  ];

  return (
    <ul
      className={clsx(
        props.className,
        "flex flex-wrap justify-evenly text-black"
      )}
    >
      {accounts.map(({ title, url, icon }) => {
        return (
          url && (
            <li key={title} className="flex w-[44px]">
              <a
                title={title}
                href={url}
                className="text-[20px] w-[44px] p-[6px] underline text-k-blue-dark text-center align-middle"
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
