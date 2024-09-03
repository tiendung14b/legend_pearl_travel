import Image from "next/image";

const UserCard = ({ name, username, avatar }) => {
  return (
    <div className="w-[212px] h-[50px] left-[46px] top-[39px] absolute justify-center items-center gap-[17px] inline-flex">
      <Image
        className="w-[50px] h-[50px] rounded-[999px]"
        src={avatar}
        alt="User Avatar"
        width={50}
        height={50}
      />
      <div className="w-[145px] h-[45px] pb-[7px] flex-col justify-start items-start gap-px inline-flex">
        <div className="text-black text-base font-bold font-['Nunito']">
          {name}
        </div>
        <div className="text-black/50 text-xs font-medium font-['Inter']">
          @{username}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
