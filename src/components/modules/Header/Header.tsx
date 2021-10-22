import type { VFC } from "react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";
import MenuButton from "./MenuButton";
import SNSButtons from "../SNSButtons";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const links = [
  {
    pagePath: "/",
    description: "トップページ",
  },
  {
    pagePath: "/about",
    description: "オンライン開催について",
  },
  {
    pagePath: "/company",
    description: "協賛企業一覧",
  },
  {
    pagePath: "/contact",
    description: "お問い合わせ",
  },
];

const Header: VFC = () => {
  const [isExpand, setIsExpand] = useState(false);
  const toggleIsExpand = () => setIsExpand((prev) => !prev);

  return (
    <header className="relative">
      <div className="bg-k-navy-dark fixed w-full h-[104px] bottom-0 z-50 k-lg:hidden">
        <div className="h-[4px] bg-gradient-to-r from-k-blue-light to-k-pink">
          <MenuButton
            isExpand={isExpand}
            toggleIsExpand={toggleIsExpand}
            className="top-[-75px] left-[calc(50%-75px)]"
          />
        </div>
        <div className="w-full px-[15%] py-[10px]">
          <div className="w-[44px]">
            <Link href="/">
              <a onClick={() => setIsExpand(false)}>
                <img src={`${prefix}/home.svg`} alt="TOPへ" width="44px" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <CSSTransition in={isExpand} timeout={400} classNames="menu-list">
        <nav
          className={clsx(
            "bg-k-navy-dark fixed w-full max-h-[40vh] text-white bottom-[-40vh] z-40",
            "k-lg:p-[20px] k-lg:bottom-0 k-lg:h-screen k-lg:max-h-screen k-lg:w-[20vw] k-lg:min-w-[250px]"
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
          <ul className="w-full px-[55px] pt-[25px] pb-[60px] k-lg:p-0">
            {links.map(({ pagePath, description }) => {
              return (
                <li key={pagePath} className="flex flex-row">
                  <Link href={pagePath}>
                    <a
                      className={clsx(
                        "text-2xl flex w-full block border-b border-k-gray-dark",
                        "transition-opacity duration-300 hover:opacity-60",
                        "h-[44px] leading-[40px]",
                        "k-lg:h-[60px] k-lg:leading-[60px]"
                      )}
                      onClick={() => setIsExpand(false)}
                    >
                      {description}
                      <div className="flex w-[8px] h-[8px] ml-auto my-auto border-t-2 border-r-2 border-white transform rotate-45" />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <SNSButtons className="hidden k-lg:block pt-[60px]" />
        </nav>
      </CSSTransition>
    </header>
  );
};

export default Header;
