import { useMemo } from "react";

const ContainerCard = ({
  studentId,
  publishDate,
  studentCount,
  propWidth,
  propFlexShrink,
  propWidth1,
}) => {
  const cardStyle = useMemo(() => {
    return {
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propFlexShrink]);

  const publishedOnStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="rounded-3xs bg-shades-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col py-[5px] px-[30px] items-center justify-center gap-[8px] text-center text-5xl text-darkslategray-200 font-roboto border-[1px] border-solid border-whitesmoke-100"
      style={cardStyle}
    >
      <img className="relative w-[35px] h-10 shrink-0" alt="" src={studentId} />
      <div className="relative tracking-[0.02em] font-medium">
        {publishDate}
      </div>
      <div
        className="relative text-mini tracking-[0.02em] text-darkgray"
        style={publishedOnStyle}
      >
        {studentCount}
      </div>
    </div>
  );
};

export default ContainerCard;
