import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import ArticleLayout from "src/components/templates/ArticleLayout";
import Subtitle from "src/components/modules/Subtitle";

const contacts = [
  {
    type: "メール",
    name: "メールアドレス",
    text: "kougakusai.1107@gmail.com",
    link: "mailto:kougakusai.1107@gmail.com",
  },
  {
    type: "Twitter",
    name: "Twitter(DM)",
    text: "@kougakufes",
    link: "https://twitter.com/kougakufes/", //DMLink="https://twitter.com/messages/compose?recipient_id=User_ID"
  },
  {
    type: "Instagram",
    name: "Instagram(DM)",
    text: "kougakufes",
    link: "https://www.instagram.com/kougakufes/",
  },
  {
    type: "匿名質問箱(Peing)",
    name: "匿名質問箱",
    text: "kougakufes",
    link: "https://peing.net/ja/kougakufes/",
  },
];

const Contact = () => {
  return (
    <article className="text-[1.8rem]">
      <p>質問等があれば下記連絡先へお気軽にお問い合わせください。</p>
      <br />
      <div className="space-y-[50px]">
        {contacts.map(({ type, name, text, link }) => {
          return (
            <div key={type}>
              <Subtitle text={name} />
              <a
                onClick={() => {
                  const jump: boolean = confirm(
                    `${type}でこうがく祭へ連絡を取りますか？\n（${type}を開きます。）`
                  );
                  if (jump) {
                    window.open(`${link}`, "_blank", "noreferrer");
                  }
                  return false;
                }}
              >
                {text}
              </a>
            </div>
          );
        })}
      </div>
    </article>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="お問い合わせ" titleEn="Contact">
      {page}
    </ArticleLayout>
  );
};

export default Contact;

// Confirmed Link ref="https://colo-ri.jp/develop/2010/03/javascriptconfirm.html"
