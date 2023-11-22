import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faPhone,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

// Header component displaying course title and action buttons
const Header = () => {
  return (
    <div className="flex justify-between items-center text-black">
      {/* Left section containing course title */}
      <div className="flex items-center space-x-2">
        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-2xl cursor-pointer">
          {/* Icon for navigating back */}
          <FontAwesomeIcon icon={faAngleLeft} size="1x" />
        </div>
        <span className="font-bold text-xl">Basics Mathematics 101</span>
      </div>

      {/* Right section containing action buttons */}
      <div className="flex items-center space-x-4">
        {/* Button to call teacher */}
        <ActionButton
          bgColor="#0384A8"
          icon={faPhone}
          label="Write Call Teacher"
        />

        {/* Button for support */}
        <ActionButton bgColor="#FB6003" icon={faHeadset} label="Support" />
      </div>
    </div>
  );
};

// Individual action button component
const ActionButton = ({ bgColor, icon, label }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const iconStyle = {
    color: "#fff",
    fontSize: "1.5rem",
  };

  return (
    <div className="flex items-center space-x-2">
      <div style={buttonStyle}>
        {/* Icon for the action */}
        <FontAwesomeIcon icon={icon} style={iconStyle} />
      </div>
      <span className="font-semibold">{label}</span>
    </div>
  );
};

export default Header;
