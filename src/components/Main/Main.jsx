import YTVideo from "../YTVideo";
import MainLeftComponent from "./MainLeftComponent";
import MainLeftIcons from "./MainLeftIcons";

const Main = () => {
  return (
    <div className="flex flex-wrap ">
      {/* Left Side */}
      <div className="p-4">
        <MainLeftComponent />

        {/* Icons below images */}
        <MainLeftIcons />
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-4">
        {/* Embedded YouTube Video */}
        <YTVideo />
      </div>
    </div>
  );
};

export default Main;
