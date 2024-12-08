import { Link, useLocation } from "react-router-dom";
import overview from "./assets/home.svg";
import detail from "./assets/detail.svg";
import darkness from "./assets/darkness.svg";
import iss from "./assets/iss.svg";
import calendar from "./assets/calendar.svg";
import settings from "./assets/settings.svg";
import refresh from "./assets/refresh.svg";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-[50px] w-screen flex flex-row justify-between items-center">
      <div className="text-offWhite ml-[8px]">
        <h1 className="text-sm font-bold">Overview</h1>
        <p className="text-xs">Location: Home (45.234442, 25.231442)</p>
      </div>
      <div className="flex flex-row mr-[15px]">
        <Link
          to="/overview"
          className={`h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center ${
            isActive("/overview") ? "border-2 border-offWhite rounded-full" : ""
          }`}
        >
          <img src={overview} alt="Overview" />
        </Link>
        <Link
          to="/detail"
          className={`h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center ${
            isActive("/detail") ? "border-2 border-offWhite rounded-full" : ""
          }`}
        >
          <img src={detail} alt="Detail View" />
        </Link>
        <Link
          to="/darkness"
          className={`h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center ${
            isActive("/darkness") ? "border-2 border-offWhite rounded-full" : ""
          }`}
        >
          <img src={darkness} alt="Darkness" />
        </Link>
        <Link
          to="/iss"
          className={`h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center ${
            isActive("/iss") ? "border-2 border-offWhite rounded-full" : ""
          }`}
        >
          <img src={iss} alt="ISS" />
        </Link>
        <Link
          to="/calendar"
          className={`h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center ${
            isActive("/calendar") ? "border-2 border-offWhite rounded-full" : ""
          }`}
        >
          <img src={calendar} alt="Calendar" />
        </Link>
        <Link
          to="/settings"
          className={`h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center ${
            isActive("/settings") ? "border-2 border-offWhite rounded-full" : ""
          }`}
        >
          <img src={settings} alt="Settings" />
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="h-[40px] w-[40px] my-[5px] mx-[5px] grid items-center justify-center"
        >
          <img src={refresh} alt="Refresh" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
