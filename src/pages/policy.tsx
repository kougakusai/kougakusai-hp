import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ArticleLayout from 'src/components/templates/ArticleLayout';
import Subtitle from 'src/components/modules/Subtitle';

export default function Policy() {
  return (
    <>
      <Head>
        <title>2021年こうがく祭公式HP | 茨城大学</title>
      </Head>
      <article className="relative top-[calc(-1.2rem-26px)] k-lg:top-[calc(-1.2rem-27px)]">
        <p className="p-2 mb-[50px] text-[1.5rem] k-lg:text-[1.8rem]">
          このウェブサイトは、茨城大学こうがく祭の公式ホームページ（以下「当サイト」）です。
          <br />
          <br />
          当サイトは、こうがく祭実行委員会（以下「当委員会」）が作成・管理しています。ご質問やご意見などがありましたら、
          <Link href="/contact">
            <a className="underline text-k-blue-dark">「お問い合わせ」</a>
          </Link>
          のページ よりお気軽にご連絡ください。
          <br />
          <br />
          なお、サイトポリシーの内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
        </p>
        <Subtitle text="免責事項" />
        <p className="p-2 mb-[50px] text-[1.5rem] k-lg:text-[1.8rem]">
          当サイトに情報を掲載するにあたっては細心の注意を払っていますが、情報の正確性および完全性を保証するものではありません。
          <br />
          <br />
          当サイトに掲載されている情報を予告なしに変更する場合があります。
          <br />
          <br />
          当サイトに掲載されている情報を利用したことで生じた損失に関して、当委員会は一切の責任を負いません。
        </p>
        <Subtitle text="著作権" />
        <p className="p-2 mb-[50px] text-[1.5rem] k-lg:text-[1.8rem]">
          当サイトに掲載されているコンテンツなどは、当委員会または出展企画が著作権を有しており、著作権法によって認められる場合を除き、著作権者の許可なくこれらを利用することはできません。
        </p>
        <Subtitle text="動作環境" />
        <p className="p-2 mb-[50px] text-[1.5rem] k-lg:text-[1.8rem]">
          当サイトは、Microsoft Edge・Google Chrome・Safari・Mozilla
          Firefoxの最新版で動作することを確認しています。お使いのブラウザやOSによっては、見え方が異なったり、正常に動作しなかったりする可能性があります。
        </p>
        <Subtitle text="リンク" />
        <p className="p-2 mb-[50px] text-[1.5rem] k-lg:text-[1.8rem]">
          当サイトへのリンクは、当委員会の許可を得ずに掲載することができます。当委員会への事後の通知も不要です。
          <br />
          ただし、以下の注意事項に該当するか、もしくはその恐れがあるウェブサイトからのリンクは固くお断りいたします。以下に該当しない場合でも、リンク設定方法の変更やリンク削除をお願いする場合があります。
        </p>
        <ul className="pl-[15px]">
          <li className="mb-[20px] text-[1.5rem] k-lg:text-[1.8rem] list-disc">
            誹謗中傷や信用失墜を意図する内容を含んだサイト
          </li>
          <li className="mb-[20px] text-[1.5rem] k-lg:text-[1.8rem] list-disc">
            アダルトコンテンツを含んだサイト
          </li>
          <li className="mb-[20px] text-[1.5rem] k-lg:text-[1.8rem] list-disc">
            公序良俗および社会倫理に反する内容を含んだサイト
          </li>
          <li className="mb-[20px] text-[1.5rem] k-lg:text-[1.8rem] list-disc">
            違法・または違法な可能性を有するコンテンツを含むサイト
          </li>
          <li className="mb-[20px] text-[1.5rem] k-lg:text-[1.8rem] list-disc">
            違法・または違法な可能性を有する活動に関わるサイト
          </li>
          <li className="mb-[20px] text-[1.5rem] k-lg:text-[1.8rem] list-disc">
            フレーム内で当ウェブサイトが展開されるものやその他の方式で、当委員会のウェブサイトであることが不明確になるなど、第三者に誤解を与える可能性があるサイト
          </li>
        </ul>
      </article>
    </>
  );
}

Policy.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout titleJa="サイトポリシー" titleEn="Policy">
      {page}
    </ArticleLayout>
  );
};
