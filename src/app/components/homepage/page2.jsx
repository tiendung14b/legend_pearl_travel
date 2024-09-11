import Banner from "components/common/banner";

export default function Page2({ onChangePage, data }) {
  console.log(data);
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
          <div class="border-[1px] border-slate-400 h-[80%] w-full rounded-lg">
            <button>Create short</button>
          </div>
        </div>
      </div>
    </div>
  );
}
