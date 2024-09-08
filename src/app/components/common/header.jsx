export default function Header() {
  const avt = "/images/spinSeele.jpg";
  return (
    <div className="shadow-md">
      <div className="py-[12px] content flex justify-between">
        <img src="/images/favicon.png" className="h-[36px]" alt="" />
        <img src={avt} className="h-[36px] aspect-square rounded-full" alt="" />
      </div>
    </div>
  );
}
