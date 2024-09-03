const TranslatedVideoHolder = ({ imageUrl, title, dateCreated }) => {
  return (
    <div className="relative w-full h-full rounded-[5px]">
      <div className="absolute left-0 top-[124px] text-black text-[14px] font-nunito font-semibold break-words">
        {title}
      </div>
      <img
        className="absolute w-[200px] h-[117.58px] left-0 top-0 rounded-[5px]"
        src={imageUrl}
        alt="Image"
      />
      <div className="absolute left-0 top-[143px] text-black text-opacity-40 text-[10px] font-nunito font-normal break-words">
        Date created: {dateCreated}
      </div>
    </div>
  );
};

export default TranslatedVideoHolder;
