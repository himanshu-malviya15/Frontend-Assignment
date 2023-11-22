import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faShareFromSquare,
  faComments,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// Component containing icons and their respective labels
const MainLeftIcons = () => {
  return (
    <div>
      {/* Wrapper for icon groups */}
      <div className="flex flex-col">
        {/* First row of icons */}
        <div className="flex space-x-20">
          {/* Individual icon with label - Video */}
          <IconWithLabel icon={faVideo} label="Cam" />

          {/* Repeat the structure for other icons */}
          <IconWithLabel icon={faMicrophone} label="Mic" />
          <IconWithLabel icon={faShareFromSquare} label="Share" />
          {/* Add more icons as needed */}
        </div>

        {/* Second row of icons */}
        <div className="flex space-x-20 mt-4">
          {/* Add more icons as needed */}
          <IconWithLabel icon={faComments} label="Chat" />
          <IconWithLabel icon={faArrowRightFromBracket} label="Leave" />
        </div>
      </div>
    </div>
  );
};

// Individual icon component with label
const IconWithLabel = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Icon container with hover effect */}
      <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md transition duration-300 ease-in-out hover:bg-[#0285A3] hover:text-white cursor-pointer">
        {/* Icon */}
        <FontAwesomeIcon icon={icon} size="1x" />
      </div>
      {/* Label */}
      <span className="mt-1 text-sm font-semibold">{label}</span>
    </div>
  );
};

export default MainLeftIcons;
