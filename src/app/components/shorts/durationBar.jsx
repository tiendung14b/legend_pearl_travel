export default function DurationBar({ duration }) {
  return (
    <div className="flex items-center">
      <div className="w-full h-[4px] bg-slate-200 rounded-lg">
        <div
          className="h-full bg-slate-600 rounded-lg"
          style={{ width: duration + "%" }}
        ></div>
      </div>
      <span className="text-slate-600 font-[400] text-[10px] ml-[5px]">
        {duration}%
      </span>
    </div>
  );
}
