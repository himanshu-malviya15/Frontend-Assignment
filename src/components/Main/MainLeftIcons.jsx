import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faShareFromSquare,
  faComments,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const MainLeftIcons = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex space-x-20">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-[#0285A3] hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faVideo} size="1x" />
            </div>
            <span className="mt-1 text-sm font-semibold">Cam</span>
          </div>
          {/* Repeat the structure for other icons */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-[#0285A3] hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faMicrophone} size="1x" />
            </div>
            <span className="mt-1 text-sm font-semibold">Mic</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-[#0285A3] hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faShareFromSquare} size="1x" />
            </div>
            <span className="mt-1 text-sm font-semibold">Share</span>
          </div>
          {/* Add more icons as needed */}
        </div>
        <div className="flex space-x-20 mt-4">
          {/* Add more icons as needed */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-[#0285A3] hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faComments} size="1x" />
            </div>
            <span className="mt-1 text-sm font-semibold">Chat</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-[#0285A3] hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="1x" />
            </div>
            <span className="mt-1 text-sm font-semibold">Leave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeftIcons;
