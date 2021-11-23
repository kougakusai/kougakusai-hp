import type { VFC } from 'react';
import clsx from 'clsx';
import TwitterIcon from '../SNSButtons/Twitter';
import InstagramIcon from '../SNSButtons/Instagram';

type Props = {
  name?: string;
  hp?: string;
  twitter?: string;
  instagram?: string;
  className?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SocialLinks: VFC<Props> = (props) => {
  const accounts = [
    {
      title: `${props.name}のHP`,
      url: props.hp,
    },
    {
      title: `${props.name}のTwitter`,
      url: props.twitter,
      icon: <TwitterIcon className="m-auto w-16 h-16 text-[#1D9BF0]" />,
    },
    {
      title: `${props.name}のInstagram`,
      url: props.instagram,
      icon: <InstagramIcon className="m-auto w-16 h-16" />,
    },
  ];

  return (
    <ul
      className={clsx(
        props.className,
        'flex flex-wrap justify-evenly mx-4 mb-4 text-black'
      )}
    >
      {accounts.map(({ title, url, icon }) => {
        return (
          url && (
            <li key={title} className="flex w-16">
              <a
                title={title}
                href={url}
                className="w-full text-[20px] text-center underline align-middle text-k-blue-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon || 'HP'}
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default SocialLinks;
