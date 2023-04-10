const CourseForm = ({ courseId, courseName, coursePrice, onRecCard1Click }) => {
  return (
    <button
      className="cursor-pointer p-0 bg-[transparent] flex-1 rounded-3xs shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] box-border h-[359px] flex flex-col items-center justify-start border-[1px] border-solid border-whitesmoke-200"
      onClick={onRecCard1Click}
    >
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
        alt=""
        src={courseId}
      />
      <div className="self-stretch flex-1 rounded-t-none rounded-b-3xs bg-shades-white flex flex-col py-5 px-4 items-center justify-center">
        <div className="self-stretch flex flex-row items-center justify-start sm:flex-row sm:gap-[0px] sm:items-center sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-black text-left">
              {courseName}
            </div>
          </div>
          <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
            {coursePrice}
          </div>
        </div>
      </div>
    </button>
  );
};

export default CourseForm;
