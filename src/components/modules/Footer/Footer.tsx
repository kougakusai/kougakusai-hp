import type { VFC } from "react";
import Link from "next/link";
import clsx from "clsx";
import SNSButtons from "../SNSButtons";

const pageURL = {
  top: "/",
  about: "#",
  company: "#",
  contact: "#",
  policy: "#",
};

const Footer: VFC = () => {
  return (
    <footer
      className={clsx(
        "bg-k-navy-black",
        "text-white",
        ["text-[1.125rem]", "px-[10%]", "pt-[10%]", "pb-[130px]"],
        ["k-lg:text-[1.35rem]", "k-lg:py-[5%]", "k-lg:pl-[7%]", "k-lg:pr-[20%]"]
      )}
    >
      <div>
        <SNSButtons className="mb-[20px]" />
        <ul className="space-y-[10px]">
          <li>
            <Link href={pageURL.top}>
              <a>トップページ</a>
            </Link>
          </li>
          <li>
            <Link href={pageURL.about}>
              <a>オンライン開催について</a>
            </Link>
          </li>
          <li>
            <Link href={pageURL.company}>
              <a>協賛企業一覧</a>
            </Link>
          </li>
          <li>
            <Link href={pageURL.contact}>
              <a>お問い合わせ</a>
            </Link>
          </li>
          <li>
            <Link href={pageURL.policy}>
              <a>サイトポリシー</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
