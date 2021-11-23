import type { VFC } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import MenuButton from './MenuButton';
import SNSButtons from '../SNSButtons/SNSButtons';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const links = [
  {
    pagePath: '/',
    description: 'トップページ',
  },
  {
    pagePath: '/about',
    description: 'オンライン開催について',
  },
  {
    pagePath: '/event/show',
    description: '企画一覧',
  },
  {
    pagePath: '/company',
    description: '協賛企業一覧',
  },
  {
    pagePath: '/contact',
    description: 'お問い合わせ',
  },
];

const Header: VFC = () => {
  const [isExpand, setIsExpand] = useState(false);
  const toggleIsExpand = () => setIsExpand((prev) => !prev);

  return (
    <header className="relative">
      <div className="k-lg:hidden fixed bottom-0 z-50 w-full h-[104px] bg-k-navy-dark">
        <div className="h-[4px] bg-gradient-to-r to-k-pink from-k-blue-light">
          <MenuButton
            isExpand={isExpand}
            toggleIsExpand={toggleIsExpand}
            className="top-[-75px] left-[calc(50%-75px)]"
          />
        </div>
        <div className="py-[10px] px-[15%] w-full">
          <div className="flex justify-between text-2xl text-center text-white">
            <div>
              <Link href="/">
                <a onClick={() => setIsExpand(false)} className="w-[44px]">
                  <img src={`${prefix}/home.svg`} alt="TOPへ" width="44px" />
                  <span>Top</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/event/show">
                <a onClick={() => setIsExpand(false)} className="w-[44px]">
                  <img
                    src={`${prefix}/event.svg`}
                    alt="企画ページへ"
                    width="44px"
                    height="44px"
                  />
                  <span>Event</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={clsx(
          'fixed z-40 w-full max-h-[40vh] text-white duration-[400ms] ease-in-out transform bg-k-navy-dark',
          'k-lg:bottom-0 k-lg:p-[20px] k-lg:w-[20vw] k-lg:min-w-[250px] k-lg:h-screen k-lg:max-h-screen k-lg:transition-none',
          isExpand ? 'bottom-[104px]' : 'bottom-[-40vh]'
        )}
      >
        <Link href="/">
          <a>
            <img
              src={`${prefix}/logoWhite.svg`}
              alt="こうがく祭"
              className="hidden k-lg:block w-full"
            />
          </a>
        </Link>
        <ul className="k-lg:p-0 px-[55px] pt-[25px] pb-[60px] w-full">
          {links.map(({ pagePath, description }) => {
            return (
              <li key={pagePath} className="flex flex-row">
                <Link href={pagePath}>
                  <a
                    className={clsx(
                      'flex w-full text-2xl border-b border-k-gray-dark',
                      'hover:opacity-60 transition-opacity duration-300',
                      'h-[44px] leading-[40px]',
                      'k-lg:h-[60px] k-lg:leading-[60px]'
                    )}
                    onClick={() => setIsExpand(false)}
                  >
                    {description}
                    <div className="flex my-auto ml-auto w-[8px] h-[8px] border-t-2 border-r-2 border-white transform rotate-45" />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <SNSButtons className="hidden k-lg:block pt-[30px]" />
      </nav>
    </header>
  );
};

export default Header;
