import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faPhone,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-black">
      <div className="flex items-center space-x-2">
        <div className="bg-[#F0F1F3] w-10 h-10 flex items-center justify-center rounded-2xl cursor-pointer">
          <FontAwesomeIcon icon={faAngleLeft} size="1x" />
        </div>
        <span className="font-bold text-xl">Basics Mathematics 101</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-[#0384A8] w-10 h-10 flex items-center justify-center rounded-2xl hover:text-white">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span className="font-semibold">Write Call Teacher</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-[#FB6003] w-10 h-10 flex items-center justify-center rounded-2xl hover:text-white">
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <span className="font-semibold">Support</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
