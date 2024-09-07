export default function Header() {
  const avt = "/images/spinSeele.jpg";
  return (
    <div class="fixed z-10 bg-white w-[100vw] mb-[100%] shadow-md">
      <div class="py-[12px] content flex justify-between">
        <img src="/images/favicon.png" class="h-[36px]" alt="" />
        <img src={avt} class="h-[36px] aspect-square rounded-full" alt="" />
      </div>
    </div>
  );
}
