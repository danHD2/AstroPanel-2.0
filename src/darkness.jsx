import search from "./assets/search.svg";
import leftArrow from "./assets/left-arrow.svg";
import rightArrow from "./assets/right-arrow.svg";

function Darkness() {
  return (
    <div className="h-[280px]">
      <div className="h-full bg-darknessGraph bg-center bg-cover flex justify-center items-end">
        <h1 className="font-bold text-offWhite mb-5">9 Hours 29 Minutes</h1>
      </div>
      <div className="controls flex justify-around bg-black h-[77px] py-2.5 px-5">
        <div className="flex flex-col text-offWhite">
          <h1 className="font-bold">02 March 2024</h1>
          <p className="text-xs">Astro Darkness: 19:38 - 05:07</p>
          <p className="text-xs">Astro Twilight: 19:02 - 05:42</p>
        </div>
        <div className="flex flex-col text-offWhite">
          <p className="text-xs mb-[5px]">Enter custom date:</p>
          <div className="flex h-[34px]">
            <div className="bg-midnight pl-[11px] pr-[15px] rounded-l-md flex items-center">
              <p>02 / 03 / 2024</p>
            </div>
            <button className="rounded-r-md ml-0.5 bg-midnight px-[22px]">
              <img src={search} alt="Search" />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-offWhite mb-[5px]">Seek controls</p>
          <div className="flex">
            <button className="bg-midnight rounded-l-md mr-0.5 px-[35px]">
              <img src={leftArrow} alt="Back" className="h-[18px]" />
            </button>
            <button className="bg-midnight rounded-r-md h-[34px] px-[35px]">
              <img src={rightArrow} alt="Foward" className="h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Darkness;
