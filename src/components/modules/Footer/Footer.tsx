import type { VFC } from "react";
import Link from "next/link";

const Footer: VFC = () => {
  return (
    <footer className="bg-k-navy-black text-white">
      <div>
        <div>{/* <SnsButton /> */}</div>
        <ul className="">
          <li>
            <Link href="/">
              <a>トップページ</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>オンライン開催について</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>協賛企業一覧</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>お問い合わせ</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>サイトポリシー</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
