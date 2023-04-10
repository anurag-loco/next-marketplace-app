import { useMemo } from "react";

const CourseCard = ({
  devOpsText,
  softwareTestingText,
  devOpsImageUrl,
  propBackgroundColor,
  onRecCard1Click,
}) => {
  const holidayDetailsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="self-stretch flex-1 rounded-3xs shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start cursor-pointer text-left text-xl text-darkslategray-200 font-roboto border-[1px] border-solid border-whitesmoke-200 mq768:flex-1 mq768:items-center mq768:justify-start"
      onClick={onRecCard1Click}
    >
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
        alt=""
        src={devOpsText}
      />
      <div
        className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col py-5 px-4 items-center justify-center"
        style={holidayDetailsStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch relative tracking-[0.02em] font-medium">
              {softwareTestingText}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] text-darkgray">
              {devOpsImageUrl}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
