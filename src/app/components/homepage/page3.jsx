"use client";
import Banner from "components/common/banner";
import { useState } from "react";
import DurationBar from "components/shorts/durationBar";

const musics = [
  { name: "None", value: "none", src: "" },
  {
    name: "Wait wait wait meme",
    value: "wwwwm",
    src: "/audios/shorts/wwwww.mp3",
  },
  {
    name: "Có chàng trai viết lên cây",
    value: "cctvlc",
    src: "/audios/shorts/cctvlc.mp3",
  },
  {
    name: "Hai Yorokonde",
    value: "hai_yorokonde",
    src: "/audios/shorts/hai_yorokonde.mp3",
  },
  {
    name: "Ocean Meme",
    value: "ocean_meme",
    src: "/audios/shorts/ocean_meme.mp3",
  },
  {
    name: "Weekend has come",
    value: "weekend_has_come",
    src: "/audios/shorts/weekend_has_come.mp3",
  },
];

export default function Page3({ data, onChangePage }) {
  const [duration, setDuration] = useState(10);
  const [music, setMusic] = useState(musics[0]);
  const [loadAudio, setLoadAudio] = useState(false);
  const generateShorts = async () => {
    const res = await fetch(`
      http://127.0.0.1:8000/shorts?url=${`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}&video_type=${
      data.type
    }&video_id=${data.snippet.resourceId.videoId}`);
    const result = await res.json();
    document.getElementById("player").src = result;
  };

  return (
    <div className="flex flex-col h-[95vh]">
      <Banner label="My Projects">
        <img src="/images/translation_banner.png" alt="" />
      </Banner>
      <div className="flex flex-col flex-1 mt-[30px]">
        <div className="flex gap-4 items-center">
          <div
            onClick={() => {
              onChangePage(1, {});
            }}
            className="bg-[#F37B8F] rounded-full size-8 flex items-center justify-center cursor-pointer"
          >
            <img src="/images/white-arrow.svg" alt="" className="size-4" />
          </div>
          <strong>Project / Generate shorts</strong>
        </div>
        <div className="flex-1 flex gap-4 mt-8">
          <iframe
            id="player"
            className="h-[80%] aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${data.snippet.resourceId.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="flex flex-col gap-4 border-[1px] border-slate-400 w-full h-[80%] overflow-y-auto rounded-lg px-6 py-5">
            <button
              onClick={generateShorts}
              className="w-full rounded-sm text-[#f00] text-[14px] font-[700] py-2 text-center bg-[#F37B8F26]"
            >
              Start Generate
            </button>
            <div className="flex flex-col">
              <strong className="text-[16px] font-[700]">Title</strong>
              <span>{data.snippet.title}</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-[16px] font-[700]">Date</strong>
              <span>
                {new Date(data?.snippet?.publishedAt).toLocaleDateString(
                  "vi-VN"
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <strong className="text-[16px] font-[700]">Duration</strong>
              <DurationBar duration={duration} />
            </div>
            <div className="flex items-center gap-2 mt-10">
              <strong className="text-[16px] font-[700]">Voices</strong>
              {!loadAudio && music.value !== "none" ? (
                <button
                  className="bg-slate-100 size-6 rounded-md p-1"
                  onClick={() => {
                    const audio = document.getElementById("audio_player");
                    audio.play();
                  }}
                >
                  <img src="/images/hear.svg" alt="" className="size-4" />
                </button>
              ) : (
                <img
                  src="/images/wavesound.gif"
                  className={`size-4 ${music.value === "none" && "hidden"}`}
                />
              )}
              <audio
                className="hidden"
                id="audio_player"
                src={music.src}
                onPlay={() => {
                  setLoadAudio(true);
                }}
                onEnded={() => {
                  setLoadAudio(false);
                }}
              />
            </div>
            <select
              className="outline-none"
              name=""
              id="char"
              onChange={() => {
                setMusic({
                  value:
                    musics.find(
                      (music) =>
                        music.src === document.getElementById("char").value
                    )?.value || "none",
                  src: document.getElementById("char").value || undefined,
                  name: document.getElementById("char").selectedOptions[0].text,
                });
                setLoadAudio(false);
              }}
            >
              {musics.map((music) => (
                <option key={music.name} value={music.src}>
                  {music.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
