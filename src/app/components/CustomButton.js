const CustomButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="relative w-[212px] h-[37px] rounded-[21px] border-2 border-[#F37B8F] bg-transparent text-black text-[14px] font-inter font-medium flex items-center justify-center"
    >
      <span>{label}</span>
    </button>
  );
};

export default CustomButton;
