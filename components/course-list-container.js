import { useMemo } from "react";
import Link from "next/link";

const CourseListContainer = ({
  courses = [],
  frame684TextAlign,
  priceHeight,
  priceAlignSelf,
  propFlex,


}) => {
  console.log(courses)
  const newCoursesStyle = useMemo(() => {
    return {
      textAlign: frame684TextAlign,
    };
  }, [frame684TextAlign]);

  const recCard1Style = useMemo(() => {
    return {
      height: priceHeight,
      alignSelf: priceAlignSelf,
    };
  }, [priceHeight, priceAlignSelf]);

  const holidayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);


  return (
    <div className="self-stretch flex flex-col pt-2.5 px-[82px] pb-0 items-start justify-start gap-[10px] text-center text-5xl text-black font-inter mq768:flex-col">
      <div
        className="relative leading-[220.52%] font-semibold"
        style={newCoursesStyle}
      >
        New
      </div>
      <div className="self-stretch grid flex-row items-center justify-start gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] text-left text-xl font-roboto">
        {
          courses && courses.map((item, i) => <Link
            className="cursor-pointer [text-decoration:none] flex-1 rounded-3xs shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] box-border h-[328px] flex flex-col items-center justify-start text-[inherit] border-[1px] border-solid border-whitesmoke-200"
            href={"/student-course-page/" + item.id}
            style={recCard1Style}
          >
            <img
              className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
              alt=""
              src={item.thumbnail}
            />
            <div
              className="self-stretch flex-1 rounded-t-none rounded-b-3xs bg-shades-white flex flex-col py-5 px-4 items-center justify-center"
              style={holidayDetails1Style}
            >
              <div className="self-stretch flex flex-row items-center justify-start sm:flex-row sm:gap-[0px] sm:items-center sm:justify-start">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[0.02em] font-medium">
                    {item.name}
                  </div>
                </div>
                <div className="relative text-5xl leading-[34px] font-inter text-gray text-right">
                  ${item.price}
                </div>
              </div>
            </div>
          </Link>)
        }

     
      </div>
    </div>
  );
};

export default CourseListContainer;
