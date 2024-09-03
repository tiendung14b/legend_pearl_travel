const ShortVideoHolder = ({ imageUrl, title, generatedDate }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[155px] left-0 top-[204px] text-black text-[14px] font-nunito font-semibold break-words">
        {title}
      </div>
      <img
        className="absolute w-[155px] h-[195px] left-0 top-0 rounded-[5px]"
        src={imageUrl}
        alt="Video Thumbnail"
      />
      <div className="absolute left-0 top-[242px] text-black text-opacity-40 text-[10px] font-nunito font-normal break-words">
        Generated Date: {generatedDate}
      </div>
    </div>
  );
};

export default ShortVideoHolder;
