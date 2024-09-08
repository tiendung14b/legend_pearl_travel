import TranslatedVideoHolder from "../components/TranslatedVideoHolder";
import ShortVideoHolder from "../components/ShortVideoHolder"; 
import SearchBar from "../components/SearchBar"; 

const Projects = () => {
  return (
    <div className="w-[1061px] h-[1207px] left-[358px] top-[76px] absolute">
      <div className="w-[340px] h-[41px] left-[23px] top-[242px] absolute">
        <div className="w-6 h-6 left-[14px] top-[9px] absolute"></div>
        <SearchBar placeholder="Find your works" />
      </div>
      <div className="w-[995px] h-[175px] left-[23px] top-[38px] absolute">
        <div className="w-[995px] h-[175px] left-0 top-0 absolute bg-gradient-to-r from-[#f37b8f] to-[#00d4ff] rounded-[20px]"></div>
        <div className="left-[38px] top-[97px] absolute text-white text-[46px] font-bold font-['Nunito']">
          My Projects
        </div>
        <img
          className="w-[200px] h-[165.75px] left-[655px] top-[9px] absolute"
          src="/images/icon-bato-edited-1.png"
          alt={}/>
      </div>
      <div className="w-[202px] h-[143px] left-[26px] top-[355px] absolute">
        <TranslatedVideoHolder
          imageUrl="/images/bocchiPlaceHolder.png"
          title="Add more"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[200px] h-[157px] left-[291px] top-[355px] absolute rounded-[5px]">
        <TranslatedVideoHolder
          imageUrl="/images/bocchiPlaceHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[200px] h-[157px] left-[26px] top-[544px] absolute rounded-[5px]">
        <TranslatedVideoHolder
          imageUrl="/images/bocchiPlaceHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[200px] h-[157px] left-[555px] top-[355px] absolute">
        <TranslatedVideoHolder
          imageUrl="/images/bocchiPlaceHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[200px] h-[157px] left-[291px] top-[544px] absolute">
        <TranslatedVideoHolder
          imageUrl="/images/bocchiPlaceHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[200px] h-[157px] left-[818px] top-[355px] absolute rounded-[5px]">
        <TranslatedVideoHolder
          imageUrl="/images/bocchiPlaceHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="left-[23px] top-[827px] absolute text-black text-base font-bold font-['Nunito']">
        Shorts Video
      </div>

      <div className="w-[155px] h-[223px] left-[23px] top-[870px] absolute flex-col justify-center items-start gap-[9px] inline-flex">
        <ShortVideoHolder
          imageUrl="/images/shortHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[186px] h-[39px] left-[462px] top-[749px] absolute">
        <div className="w-[186px] h-[39px] left-0 top-0 absolute bg-[#ff4c6a]/20 rounded-[5px]"></div>
        <div className="left-[55px] top-[11px] absolute text-[#ff0000] text-sm font-medium font-['Inter']">
          More video
        </div>
      </div>

      <div className="left-[26px] top-[312px] absolute text-black text-base font-bold font-['Nunito']">
        Translated Video
      </div>

      <div className="w-[155px] h-64 left-[237px] top-[870px] absolute">
        <ShortVideoHolder
          imageUrl="/images/shortHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>

      <div className="w-[155px] h-64 left-[451px] top-[870px] absolute">
        <ShortVideoHolder
          imageUrl="/images/shortHolder.png"
          title="Bocchi cries as fuck"
          dateCreated="1/1/2000"
        />
      </div>
    </div>
  );
};

export default Projects;
