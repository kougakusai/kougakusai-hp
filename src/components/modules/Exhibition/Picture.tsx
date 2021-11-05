import clsx from "clsx";
import type { VFC } from "react";
import ImgModal from "./ImgModal";

type Props = {
  title: string;
  src: string;
  author: string;
  postcard?: string;
  avail?: boolean;
};

const printExp = (cardName: string, printCode: string | undefined) =>
  `ネットプリントサービスを利用して、セブンイレブンで「${cardName}」のポストカードを印刷することができます。詳しくは、netprintのページでご確認ください。\n\n「${cardName}」印刷コード：[${printCode}]\n\nnetprintの説明ページを開きますか？`;

const netPrintUrl = "https://www.printing.ne.jp/support/lite/guide/step2.html";

const Picture: VFC<Props> = (props) => {
  const pingAnimation = (
    <span className="flex w-4 h-4 justify-center items-center float-right relative">
      <span className="animate-ping bg-k-pink inline-flex w-4 h-4 rounded-full opacity-50 absolute" />
      <span className="animate-none bg-k-pink inline-flex w-3 h-3 rounded-full opacity-75 relative" />
    </span>
  );

  return (
    <div className="space-y-4 p-8 k-lg:p-16">
      <h3 className="flex text-[2rem]">
        {props.title}
        {props.postcard && props.avail && pingAnimation}
      </h3>
      <ImgModal src={props.src} alt={props.title} />
      <div>
        <button
          className={clsx(
            "text-white bg-k-pink rounded-md",
            {
              "disabled:opacity-75 disabled:grayscale disabled:animate-none disabled:cursor-default":
                props.postcard && !props.avail,
            },
            { hidden: !props.postcard }
          )}
          onClick={() => {
            const jump: boolean = confirm(
              printExp(props.title, props.postcard)
            );
            if (jump) {
              window.open(netPrintUrl, "_blank", "noreferrer");
            }
            return false;
          }}
          disabled={!props.avail}
        >
          {props.avail
            ? `印刷コード：${props.postcard}`
            : "ポストカードの印刷は終了しました"}
        </button>
        <span className="float-right">P.N. {props.author}</span>
      </div>
    </div>
  );
};

export default Picture;
