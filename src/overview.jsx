import clouds from "./assets/Clouds.png";
import sun from "./assets/Sun.png";
import sunset from "./assets/Sunset.png";
import moon from "./assets/Moon.png";
import cover0 from "./assets/cover0.png";
import cover1 from "./assets/cover1.png";
import cover2 from "./assets/cover2.png";
import cover3 from "./assets/cover3.png";
import cover4 from "./assets/cover4.png";
import cover5 from "./assets/cover5.png";
import cover6 from "./assets/cover6.png";
import cover7 from "./assets/cover7.png";
import cover8 from "./assets/cover8.png";
import seeing0 from "./assets/Seeing0.png";
import seeing1 from "./assets/Seeing1.png";
import seeing2 from "./assets/Seeing2.png";
import seeing3 from "./assets/Seeing3.png";
import seeing4 from "./assets/Seeing4.png";
import seeing5 from "./assets/Seeing5.png";
import seeing6 from "./assets/Seeing6.png";
import seeing7 from "./assets/Seeing7.png";
import seeing8 from "./assets/Seeing8.png";
import trans0 from "./assets/transparency0.png";
import trans1 from "./assets/transparency1.png";
import trans2 from "./assets/transparency2.png";
import trans3 from "./assets/transparency3.png";
import trans4 from "./assets/transparency4.png";
import trans5 from "./assets/transparency5.png";
import trans6 from "./assets/transparency6.png";
import trans7 from "./assets/transparency7.png";

function Overview() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = ["11:00", "14:00", "17:00", "20:00", "23:00"];
  return (
    <div className="h-[280px] flex flex-row overflow-auto">
      {days.map((day) => {
        return (
          <div key={days.index} className="flex flex-row">
            {hours.map((hour) => {
              switch (hour) {
                case "11:00":
                  return (
                    <div
                      key={hours.index}
                      className="h-full w-40 bg-daylightBlue text-offWhite border-r-[0.004em] border-black"
                    >
                      <div className="relative h-full">
                        <div className="p-5 flex h-full flex-col justify-between items-center">
                          <div className="w-full flex flex-col items-center">
                            <div className="w-full relative z-10">
                              <p className="text-base font-bold">{day}</p>
                              <p className="text-xs">30 January</p>
                            </div>
                            <img
                              src={cover6}
                              alt="Cloud Cover"
                              className="w-[32px] relative z-10 mt-[24px]"
                            />
                            <img
                              src={seeing2}
                              alt="Seeing"
                              className="w-[32px] mt-[24px]"
                            />
                            <img
                              src={trans4}
                              alt="Transparency"
                              className="w-[18px] mt-[24px]"
                            />
                          </div>
                          <p className="relative z-10 text-xs">{hour}</p>
                        </div>
                        <img
                          src={sun}
                          alt="Sun"
                          className="absolute right-0 bottom-0"
                        />
                        <img
                          src={clouds}
                          alt="Cloudy"
                          className="absolute top-0"
                        />
                      </div>
                    </div>
                  );
                case "14:00":
                  return (
                    <div
                      key={hours.index}
                      className="h-full w-40 bg-daylightBlue text-offWhite border-r-[0.004em] border-black"
                    >
                      <div className="relative h-full">
                        <div className="p-5 flex h-full flex-col justify-between items-center">
                          <div className="w-full flex flex-col items-center">
                            <div className="w-full relative z-10 invisible">
                              <p className="text-base font-bold">{day}</p>
                              <p className="text-xs">30 January</p>
                            </div>
                            <img
                              src={cover4}
                              alt="Cloud Cover"
                              className="w-[32px] relative z-10 mt-[24px]"
                            />
                            <img
                              src={seeing4}
                              alt="Seeing"
                              className="w-[32px] mt-[24px]"
                            />
                            <img
                              src={trans3}
                              alt="Transparency"
                              className="w-[18px] mt-[24px]"
                            />
                          </div>
                          <p className="relative z-10 text-xs">{hour}</p>
                        </div>
                        <img
                          src={sun}
                          alt="Sun"
                          className="absolute right-0 bottom-0"
                        />
                        <img
                          src={clouds}
                          alt="Cloudy"
                          className="absolute top-0 opacity-50"
                        />
                      </div>
                    </div>
                  );
                case "17:00":
                  return (
                    <div
                      key={hours.index}
                      className="h-full w-40 bg-daylightBlue text-offWhite border-r-[0.004em] border-black"
                    >
                      <div className="relative h-full">
                        <div className="p-5 flex h-full flex-col justify-between items-center">
                          <div className="w-full flex flex-col items-center">
                            <div className="w-full relative z-10 invisible">
                              <p className="text-base font-bold">{day}</p>
                              <p className="text-xs">30 January</p>
                            </div>
                            <img
                              src={cover2}
                              alt="Cloud Cover"
                              className="w-[32px] relative z-10 mt-[24px]"
                            />
                            <img
                              src={seeing5}
                              alt="Seeing"
                              className="w-[32px] mt-[24px]"
                            />
                            <img
                              src={trans3}
                              alt="Transparency"
                              className="w-[18px] mt-[24px]"
                            />
                          </div>
                          <p className="relative z-10 text-xs">{hour}</p>
                        </div>
                        <img
                          src={sunset}
                          alt="Sunset"
                          className="absolute right-0 bottom-0"
                        />
                        <img
                          src={clouds}
                          alt="Cloudy"
                          className="absolute top-0 opacity-25"
                        />
                      </div>
                    </div>
                  );
                case "20:00":
                  return (
                    <div
                      key={hours.index}
                      className="h-full w-40 bg-gradient-to-r from-daylightBlue to-midnight text-offWhite border-r-[0.004em] border-black"
                    >
                      <div className="relative h-full">
                        <div className="p-5 flex h-full flex-col justify-between items-center">
                          <div className="w-full flex flex-col items-center">
                            <div className="w-full relative z-10 invisible">
                              <p className="text-base font-bold">{day}</p>
                              <p className="text-xs">30 January</p>
                            </div>
                            <img
                              src={cover0}
                              alt="Cloud Cover"
                              className="w-[32px] relative z-10 mt-[24px]"
                            />
                            <img
                              src={seeing6}
                              alt="Seeing"
                              className="w-[32px] mt-[24px]"
                            />
                            <img
                              src={trans3}
                              alt="Transparency"
                              className="w-[18px] mt-[24px]"
                            />
                          </div>
                          <p className="relative z-10 text-xs">{hour}</p>
                        </div>
                      </div>
                    </div>
                  );
                case "23:00":
                  return (
                    <div
                      key={hours.index}
                      className="h-full w-40 bg-midnight text-offWhite border-r-[0.004em] border-black"
                    >
                      <div className="relative h-full">
                        <div className="p-5 flex h-full flex-col justify-between items-center">
                          <div className="w-full flex flex-col items-center">
                            <div className="w-full relative z-10 invisible">
                              <p className="text-base font-bold">{day}</p>
                              <p className="text-xs">30 January</p>
                            </div>
                            <img
                              src={cover0}
                              alt="Cloud Cover"
                              className="w-[32px] relative z-10 mt-[24px]"
                            />
                            <img
                              src={seeing7}
                              alt="Seeing"
                              className="w-[32px] mt-[24px]"
                            />
                            <img
                              src={trans3}
                              alt="Transparency"
                              className="w-[18px] mt-[24px]"
                            />
                          </div>
                          <p className="relative z-10 text-xs">{hour}</p>
                        </div>
                        <img
                          src={moon}
                          alt="Moon"
                          className="absolute left-0 bottom-0"
                        />
                      </div>
                    </div>
                  );
                default:
                  return (
                    <div
                      key={hours.index}
                      className="h-full w-40 bg-daylightBlue text-center text-offWhite border-r-[0.004em] border-black"
                    >
                      <div className="relative">
                        <p className="pt-[50px] relative z-10">No data</p>
                        <p className="relative z-10">No data</p>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
