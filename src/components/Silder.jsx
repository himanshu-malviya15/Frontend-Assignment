import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChalkboard,
  faFile,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div className="flex items-center text-black bg-gray-200 rounded-full">
      <div className="flex items-center space-x-20">
        <div className="flex items-center space-x-2 rounded-[50px] p-4 transition duration-300 ease-in-out hover:bg-white hover:p-4 cursor-pointer">
          <FontAwesomeIcon icon={faLaptopCode} />
          <span className="font-semibold">Classroom</span>
        </div>
        <div className="flex items-center space-x-2 rounded-[50px] p-4 transition duration-300 ease-in-out hover:bg-white hover:p-4 cursor-pointer">
          <FontAwesomeIcon icon={faChalkboard} />
          <span className="font-semibold">Whiteboard</span>
        </div>
        <div className="flex items-center space-x-2 rounded-[50px] p-4 transition duration-300 ease-in-out hover:bg-white hover:p-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <span className="font-semibold">Videos</span>
        </div>
        <div className="flex items-center space-x-2 rounded-[50px] p-4 transition duration-300 ease-in-out hover:bg-white hover:p-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M187.7 153.7c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7s61.7-26 61.7-57.7c0-32-27.7-57.7-61.7-57.7zm143.4 0c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7 34.3 0 61.7-26 61.7-57.7.1-32-27.4-57.7-61.7-57.7zm156.6 90l-6 4.3V49.7c0-27.4-20.6-49.7-46-49.7H76.6c-25.4 0-46 22.3-46 49.7V248c-2-1.4-4.3-2.9-6.3-4.3-15.1-10.6-25.1 4-16 17.7 18.3 22.6 53.1 50.3 106.3 72C58.3 525.1 252 555.7 248.9 457.5c0-.7.3-56.6.3-96.6 5.1 1.1 9.4 2.3 13.7 3.1 0 39.7.3 92.8.3 93.5-3.1 98.3 190.6 67.7 134.3-124 53.1-21.7 88-49.4 106.3-72 9.1-13.8-.9-28.3-16.1-17.8zm-30.5 19.2c-68.9 37.4-128.3 31.1-160.6 29.7-23.7-.9-32.6 9.1-33.7 24.9-10.3-7.7-18.6-15.5-20.3-17.1-5.1-5.4-13.7-8-27.1-7.7-31.7 1.1-89.7 7.4-157.4-28V72.3c0-34.9 8.9-45.7 40.6-45.7h317.7c30.3 0 40.9 12.9 40.9 45.7v190.6z" />
          </svg>
          <span className="w-20 font-semibold">Slide Show</span>
        </div>
        <div className="flex items-center space-x-2 rounded-[50px] p-4 transition duration-300 ease-in-out hover:bg-white hover:p-4 cursor-pointer">
          <FontAwesomeIcon icon={faFile} />
          <span className="font-semibold">Documents</span>
        </div>
        <div className="flex items-center space-x-2 rounded-[50px] p-4 transition duration-300 ease-in-out hover:bg-white hover:p-4 cursor-pointer">
          <FontAwesomeIcon icon={faFileLines} />
          <span className="font-semibold">Doc.Cam</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
