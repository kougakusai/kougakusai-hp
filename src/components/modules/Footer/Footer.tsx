import type { VFC } from "react";
import Link from "next/link";
import clsx from "clsx";
import SNSButtons from "../SNSButtons/SNSButtons";

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
    pagePath: "/event/show",
    description: "企画一覧",
  },
  {
    pagePath: "/company",
    description: "協賛企業一覧",
  },
  {
    pagePath: "/contact",
    description: "お問い合わせ",
  },
  {
    pagePath: "/policy",
    description: "サイトポリシー",
  },
];

const Footer: VFC = () => {
  return (
    <footer
      className={clsx(
        "k-lg:ml-auto w-full k-lg:w-[calc(100%-20vw)]",
        "bg-k-navy-black text-white text-[1.8rem]",
        "px-[10%] pt-[10%] pb-[180px] k-lg:py-[5%] k-lg:pl-[7%] k-lg:pr-[20%] k-lg:pb-[130px]"
      )}
    >
      <div>
        <SNSButtons className="mb-[20px]" />
        <ul className="space-y-[10px]">
          {links.map(({ pagePath, description }) => {
            return (
              <li key={pagePath}>
                <Link href={pagePath}>
                  <a>{description}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
