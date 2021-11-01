import clsx from "clsx";
import type { VFC } from "react";

type Props = {
  title: string;
  src: string;
  author: string;
  postcard?: string;
  avail?: boolean;
};

const printExp = (cardName: string) =>
  `ネットプリントサービスを利用して、セブンイレブンで「${cardName}」のポストカードを印刷することができます。詳しくは、netprintのページでご確認ください。\n印刷コード[0000]`;

const netPrintUrl = "#";

const Picture: VFC<Props> = (props) => {
  const pingAnimation = (
    <span
      className={clsx(
        "flex w-4 h-4 justify-center items-center float-right relative",
        { hidden: !(props.postcard && props.avail) }
      )}
    >
      <span className="animate-ping bg-k-pink inline-flex w-4 h-4 rounded-full opacity-50 absolute" />
      <span className="animate-none bg-k-pink inline-flex w-3 h-3 rounded-full opacity-75 relative" />
    </span>
  );

  // if (props.postcard && props.avail) {
  return (
    <div className="space-y-4 p-4 k-lg:p-16">
      <h3 className="flex text-[2rem]">
        {props.title}
        {pingAnimation}
      </h3>
      <img
        src={props.src}
        alt={props.title}
        className="w-full drop-shadow-lg"
      />
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
            const jump: boolean = confirm(printExp(props.title));
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
  // } else if (props.postcard && !props.avail) {
  //   return (
  //     <div className="space-y-2">
  //       <h3 className="flex text-[2rem]">{props.title}</h3>
  //       <img src={props.src} alt={props.title} />
  //       <div className="space-x-2">
  //         <button
  //           className="disabled:opacity-75 disabled:grayscale disabled:animate-none animate-pulse text-white bg-k-pink rounded-md"
  //           disabled
  //         >
  //           ポストカードの印刷は終了しました
  //         </button>
  //         <span className="float-right">P.N. {props.author}</span>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="space-y-2">
  //       <h3 className="flex text-[2rem]">{props.title}</h3>
  //       <img src={props.src} alt={props.title} className="drop-shadow" />
  //       <span className="float-right">P.N. {props.author}</span>
  //     </div>
  //   );
  // }
};

export default Picture;
