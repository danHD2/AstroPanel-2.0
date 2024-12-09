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
              return (
                <div
                  key={hours.index}
                  className="h-full w-40 bg-daylightBlue text-center text-offWhite border-r-[0.004em] border-black"
                >
                  {hour === "11:00" ? (
                    <div>
                      <p className="pt-[50px]">{day}</p>
                      <p>{hour}</p>
                    </div>
                  ) : (
                    <p className="pt-[73px]">{hour}</p>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
