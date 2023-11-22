
// Component displaying images with names on hover
const MainLeftComponent = () => {
  return (
    <div>
      {/* Wrapper for image components */}
      <div className="flex flex-col mb-4">
        {/* First image */}
        <div className="relative mb-2">
          {/* Image with hover effect */}
          <img
            className="rounded-[40px] w-[300px] hover:opacity-75 transition duration-300"
            src="https://img.freepik.com/free-photo/child-underlining-book_1098-3314.jpg"
            alt="Image 1"
          />
          {/* Name displayed on hover */}
          <span className="p-3 rounded-[40px] absolute inset-0 flex items-end justify-start text-white text-lg font-bold opacity-0 bg-black bg-opacity-25 transition duration-300 hover:opacity-100 cursor-pointer">
            Jake
          </span>
        </div>

        {/* Second image */}
        <div className="relative">
          {/* Image with hover effect */}
          <img
            className="rounded-[40px] w-[300px] hover:opacity-75 transition duration-300"
            src="https://cdn.pixabay.com/photo/2023/01/30/15/36/school-7755985_960_720.jpg"
            alt="Image 2"
          />
          {/* Name displayed on hover */}
          <span className="p-3 rounded-[40px] absolute inset-0 flex items-end justify-start text-white text-lg font-bold opacity-0 bg-black bg-opacity-25 transition duration-300 hover:opacity-100 cursor-pointer">
            Sammy
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainLeftComponent;
