export default function Banner({ children, label }) {
  return (
    <div class="relative h-[175px] w-full rounded-xl linear-gradient">
      <p class="absolute bottom-[15px] left-[38px] text-[46px] font-[700] text-white">
        {label || "Banner"}
      </p>
      <div class="absolute bottom-0 right-[140px]">{children}</div>
    </div>
  );
}
