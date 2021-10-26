import { useEffect, useState, VFC } from "react";
import clsx from "clsx";
import DateTimer from "./DateTimer";

type Props = {
  id: string;
  className?: string;
};

const ApiKey = "AIzaSyDVda2whCTmV7QpcEZv-euQbQZ-ABAzkMA";
const partOption = "snippet,liveStreamingDetails";
const ApiUrl = (liveId: string) =>
  `https://www.googleapis.com/youtube/v3/videos?id=${liveId}&key=${ApiKey}&part=${partOption}`;

const PlayerComp = (id: string, w: number = 500) => {
  return (
    <iframe
      width={w}
      height={(9 * w) / 16}
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

const YTLive: VFC<Props> = (props) => {
  const Player = PlayerComp(props.id);

  const [scheduledST, setScheduledST] = useState("");
  const [actualST, setActualST] = useState(0);
  const [endT, setEndT] = useState(0);

  useEffect(() => {
    fetch(ApiUrl(props.id))
      .then((data) => data.json())
      .then((json) => {
        setScheduledST(json.items[0].liveStreamingDetails.scheduledStartTime);
        setActualST(json.items[0].liveStreamingDetails.actualStartTime);
        setEndT(json.items[0].liveStreamingDetails.actualEndTime);
      });
  }, [props.id]);

  const remTime = DateTimer(scheduledST);

  if (!actualST && !endT) {
    //UpComing
    if (remTime.day >= 1) {
      return (
        <section className={props.className}>
          <span className="text-9xl font-black">
            {`Live starts in ${remTime.day} Days ${remTime.hour} Hours.`}
          </span>
        </section>
      );
    } else if (remTime.hour >= 1) {
      //remaining under 1 day
      return (
        <section className={props.className}>
          <span
            className="bg-clip-text text-9xl text-transparent font-black bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${props.id}/hqdefault.jpg)`,
            }}
          >
            {`Live starts in ${remTime.hour} Hours ${remTime.min} Minutes ${remTime.sec} seconds.`}
          </span>
        </section>
      );
    } else {
      //remaining under 1 hour
      return (
        <section className={props.className}>
          <span
            className="bg-clip-text text-9xl text-transparent font-black bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${props.id}/hqdefault.jpg)`,
            }}
          >
            {`Live starts in ${remTime.min} Minutes ${remTime.sec} seconds ${remTime.ms}.`}
          </span>
        </section>
      );
    }
  } else if (!endT) {
    //Continue
    return (
      <section className={props.className}>
        <p className="space-x-8">
          <span>Streaming Now!</span>
          <a
            className="text-white bg-red-500"
            href={`https://www.youtube.com/watch?v=${props.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Watch in Youtube.
          </a>
        </p>
        {Player}
      </section>
    );
  } else if (endT) {
    return (
      <section className={props.className}>
        <p>Archive here!</p>
        {Player}
      </section>
    );
  } else {
    return (
      <section className={props.className}>
        Unknown Errored.
        <p>{scheduledST}</p>
        <p>{actualST}</p>
        <p>{endT}</p>
      </section>
    );
  }
};

export default YTLive;

/*  refs

Fetch: https://blog.narumium.net/2020/10/01/next-js%E3%81%A7%E5%A4%96%E9%83%A8api%E3%82%92%E5%8F%A9%E3%81%8F%EF%BC%93%E3%81%A4%E3%81%AE%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3/
YT-API:{
  https://qiita.com/iroiro_bot/items/1016a6a439dfb8d21eca
  https://qiita.com/st43/items/a5348104a5d9f76de5e2
  https://developers.google.com/youtube/v3/getting-started
  live: https://coolish.hatenablog.com/entry/2019/01/24/040125

}

*/
