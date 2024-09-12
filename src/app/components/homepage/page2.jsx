import Banner from "components/common/banner";
import { useState } from "react";

function LanguagesSelection({ languages, addLanguage }) {
  return (
    <div class="absolute bottom-0 translate-y-1/2 left-full flex flex-col mt-2 h-[130px] bg-white shadow-lg overflow-y-scroll hover:*:bg-[#F37B8F26] hover:*:text-red-600 *:cursor-pointer">
      {languages.map((language) => (
        <span
          class=" text-black rounded-md px-2 py-1 text-[12px] "
          key={language.languageCode}
          onClick={() => addLanguage(language)}
        >
          {language.language}
        </span>
      ))}
    </div>
  );
}

export default function Page2({ onChangePage, data }) {
  const [open, setOpen] = useState(false);
  const [currLanguage, setCurrLanguage] = useState("en");

  const [languages, setLanguages] = useState([
    { language: "English", languageCode: "en" },
    { language: "Spanish", languageCode: "es" },
  ]);

  const addLanguage = async (language) => {
    if (languages.length >= 5) return;
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/translate?video_url=https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}&language=${language.languageCode}&video_type=${data.type}&use_captions=${data.use_captions}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setLanguages([...languages, language]);
    setCurrLanguage(language.languageCode);
    setOpen(false);
  };

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

  return (
    <div class="flex flex-col h-[95vh]">
      <Banner label="My Projects">
        <img src="/images/translation_banner.png" alt="" />
      </Banner>
      <div class="flex flex-col flex-1 mt-[30px]">
        <div class="flex gap-4 items-center">
          <div
            class="bg-[#F37B8F] rounded-full size-8 flex items-center justify-center cursor-pointer"
            onClick={onChangePage.bind(null, 1, {})}
          >
            <img src="/images/white-arrow.svg" alt="" class="size-4" />
          </div>
          <strong>Project / Edit</strong>
        </div>
        <div class="flex-1 flex gap-4 mt-8">
          <iframe
            class="h-[80%] aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${data.snippet.resourceId.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="flex flex-col gap-4 border-[1px] border-slate-400 h-[80%] w-full rounded-lg px-6 py-5">
            <button class="w-full rounded-sm text-[#f00] text-[14px] font-[700] py-2 text-center bg-[#F37B8F26]">
              Create short
            </button>
            <div class="flex flex-col">
              <strong class="text-[16px] font-[700]">Title</strong>
              <span>{data.snippet.title}</span>
            </div>
            <div class="flex flex-col">
              <strong class="text-[16px] font-[700]">Date</strong>
              <span>
                {new Date(data.snippet.publishedAt).toLocaleDateString("vi-VN")}
              </span>
            </div>
            <div class="flex flex-col">
              <strong class="text-[16px] font-[700]">Languages</strong>
              <div class="flex gap-2 flex-wrap mt-2">
                {languages.map((language) => (
                  <span
                    class={`${
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
                  class="cursor-pointer relative bg-[#F37B8F] text-white rounded-md px-[10px] flex items-center text-[12px]"
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
                        addLanguage={addLanguage}
                      />
                    )
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
