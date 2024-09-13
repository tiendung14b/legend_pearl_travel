import Banner from "components/common/banner";
import { useState } from "react";
import { createVideo } from "api/api";

const characters = [
  { value: "none", name: "Default" },
  { value: "Arisu", name: "アリス", src: "/audios/arisu.mp3" },
  { value: "Obama", name: "Obama", src: "/audios/obama.mp3" },
  { value: "Trump", name: "Trump", src: "/audios/trump.mp3" },
  { value: "Thang Ngot", name: "Thắng (Ngọt)", src: "/audios/thang.mp3" },
  { value: "Yoda", name: "Yoda", src: "/audios/yoda.mp3" },
  { value: "Yukkuri", name: "Yukkuri", src: "/audios/yukkuri.mp3" },
];

const availableLanguage = [
  { language: "English", languageCode: "en" },
  { language: "Spanish", languageCode: "es" },
  { language: "French", languageCode: "fr" },
  { language: "German", languageCode: "de" },
  { language: "Italian", languageCode: "it" },
  { language: "Portuguese", languageCode: "pt" },
  { language: "Polish", languageCode: "pl" },
  { language: "Turkish", languageCode: "tr" },
  { language: "Russian", languageCode: "ru" },
  { language: "Dutch", languageCode: "nl" },
  { language: "Czech", languageCode: "cs" },
  { language: "Arabic", languageCode: "ar" },
  { language: "Chinese", languageCode: "zh-cn" },
  { language: "Japanese", languageCode: "ja" },
  { language: "Hungarian", languageCode: "hu" },
  { language: "Korean", languageCode: "ko" },
  { language: "Hindi", languageCode: "hi" },
];

function LanguagesSelection({ languages, confirm }) {
  return (
    <div className="absolute bottom-0 translate-y-1/2 left-full flex flex-col mt-2 h-[130px] bg-white shadow-lg overflow-y-scroll hover:*:bg-[#F37B8F26] hover:*:text-red-600 *:cursor-pointer">
      {languages.map((language) => (
        <span
          className=" text-black rounded-md px-2 py-1 text-[12px] "
          key={language.languageCode}
          onClick={confirm.bind(null, language)}
        >
          {language.language}
        </span>
      ))}
    </div>
  );
}

function popupConfirmUpload({ data, setRequiredConfirm, onAgree }) {
  return (
    <div className="w-[200px] p-2 absolute bottom-0 translate-y-1/2 left-full flex flex-col items-center mt-2 bg-white shadow-lg">
      <strong className="text-black">
        Translate video to{" "}
        <span className="text-red-600">{data.language.language}</span> with{" "}
        <span className="text-red-600">{data.voice}</span> voice
      </strong>
      <div className="flex gap-2 mt-2">
        <button
          className="bg-[#F37B8F] text-white rounded-md px-2 py-1 text-[12px]"
          onClick={onAgree}
        >
          Yes
        </button>
        <button
          onClick={() => {
            setRequiredConfirm(false);
          }}
          className="bg-[#D9D9D9] text-black rounded-md px-2 py-1 text-[12px]"
        >
          No
        </button>
      </div>
    </div>
  );
}

export default function Page2({ onChangePage, data }) {
  // data có type, và toàn bộ snippet
  const [open, setOpen] = useState(false);
  const [currLanguage, setCurrLanguage] = useState("en");
  const [charVoice, setCharVoice] = useState(characters[0]);
  const [loadAudio, setLoadAudio] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [requiredConfirm, setRequiredConfirm] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const [languages, setLanguages] = useState([
    { language: "English", languageCode: "en" },
  ]);

  const addLanguage = async (language, voice) => {
    console.log(language, voice);
    setOpen(!open);
    setRequiredConfirm(false);
    try {
      const response = await fetch(`
      http://127.0.0.1:8000/translate?url=${`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}&language=${
        language.language
      }&video_type=${data.type}&use_captions=${
        data.use_captions ? "True" : "False"
      }&voice=${voice.value}&video_id=${
        data.snippet.resourceId.videoId || ""
      }`);

      const res = await response.json();

      console.log(res);

      const videoData = {
        video_id: data.snippet.resourceId.videoId,
        video_title: data.snippet.title,
        video_voice: voice.value,
        video_language: language.language,
        video_type: data.type,
        video_url: res,
      };

      const token = localStorage.getItem("token");
      const createdVideo = await createVideo(videoData, token);
      console.log(videoData);
      if (createdVideo) {
        alert("Video created successfully!");
        setLanguages([...languages, language]);
        setCurrLanguage(language.languageCode);
        document.getElementById("player").src = res;
      } else {
        alert("Failed to create video. Please try again.");
      }
    } catch (error) {
      console.error("Error adding language:", error);
      alert("An error occurred while adding the language. Please try again.");
    }
  };

  // Test method using fake data
  // const testAddLanguage = (language, voice) => {
  //   const fakeLanguage = { language: "Spanish", languageCode: "es" };
  //   const fakeVoice = { value: "es-ES-Standard-A" };
  //   const fakeResponse = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  //   console.log("Testing addLanguage with fake data:", fakeLanguage, fakeVoice);

  //   // Simulate API call with setTimeout
  //   setTimeout(() => {
  //     console.log("Fake API response:", fakeResponse);
  //     setLanguages([...languages, fakeLanguage]);
  //     setCurrLanguage(fakeLanguage.languageCode);
  //     setOpen(false);
  //     document.getElementById("player").src = fakeResponse;
  //   }, 1000);
  // };

  return (
    <div className="flex flex-col h-[95vh]">
      <Banner label="My Projects">
        <img src="/images/translation_banner.png" alt="" />
      </Banner>
      <div className="flex flex-col flex-1 mt-[30px]">
        <div className="flex gap-4 items-center">
          <div
            className="bg-[#F37B8F] rounded-full size-8 flex items-center justify-center cursor-pointer"
            onClick={onChangePage.bind(null, 1, {})}
          >
            <img src="/images/white-arrow.svg" alt="" className="size-4" />
          </div>
          <strong>Project / Edit</strong>
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
              onClick={() => {
                onChangePage(3, data);
              }}
              className="w-full rounded-sm text-[#f00] text-[14px] font-[700] py-2 text-center bg-[#F37B8F26]"
            >
              Create short
            </button>
            <div className="flex flex-col">
              <strong className="text-[16px] font-[700]">Title</strong>
              <span>{data.snippet.title}</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-[16px] font-[700]">Date</strong>
              <span>
                {new Date(data.snippet.publishedAt).toLocaleDateString("vi-VN")}
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <strong className="text-[16px] font-[700]">Voices</strong>
                {!loadAudio && charVoice.value !== "none" ? (
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
                    className={`size-4 ${
                      charVoice.value === "none" && "hidden"
                    }`}
                  />
                )}
                <audio
                  className="hidden"
                  id="audio_player"
                  src={charVoice.src}
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
                  setCharVoice({
                    value:
                      characters.find(
                        (character) =>
                          character.src ===
                          document.getElementById("char").value
                      )?.value || "none",
                    src: document.getElementById("char").value || undefined,
                    name: document.getElementById("char").selectedOptions[0]
                      .text,
                  });
                  setLoadAudio(false);
                }}
              >
                {characters.map((character) => (
                  <option key={character.name} value={character.src}>
                    {character.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <strong className="text-[16px] font-[700]">Languages</strong>
              <div className="flex gap-2 flex-wrap mt-2">
                {languages.map((language) => (
                  <span
                    className={`${
                      language.languageCode !== currLanguage
                        ? "bg-[#D9D9D9] text-black"
                        : "bg-[#F37B8F26] text-red-600 font-[600]"
                    } rounded-md px-2 py-1 text-[12px]`}
                    key={language.languageCode}
                  >
                    {language.language}
                  </span>
                ))}
                <span
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer relative bg-[#F37B8F] text-white rounded-md px-[10px] flex items-center text-[12px]"
                >
                  +
                  {
                    /* { remove duplicate} */
                    open && (
                      <LanguagesSelection
                        languages={availableLanguage.filter(
                          (language) =>
                            !languages.find(
                              (l) => l.languageCode === language.languageCode
                            )
                        )}
                        confirm={(language) => {
                          setSelectedLanguage(language);
                          setRequiredConfirm(true);
                          setOpen(!open);
                        }}
                      />
                    )
                  }
                  {requiredConfirm &&
                    popupConfirmUpload({
                      data: {
                        language: selectedLanguage,
                        voice: charVoice.name,
                      },
                      setRequiredConfirm: () => {
                        setRequiredConfirm(false);
                      },
                      onAgree: () => {
                        addLanguage(selectedLanguage, charVoice);
                        // testAddLanguage();
                      },
                    })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
