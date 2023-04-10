import ContainerCard from "./container-card";

const CourseAnalyticsContainer = () => {
  return (
    <div className="self-stretch flex flex-col py-2.5 px-[82px] items-start justify-start gap-[20px] text-center text-5xl text-black font-inter">
      <div className="relative leading-[220.52%] font-semibold">
        Course Analytics
      </div>
      <div className="self-stretch flex flex-row items-start justify-between text-xl text-darkslategray-200 font-roboto md:gap-[30px] md:flex-col-reverse">
        <div className="flex flex-col items-center justify-center gap-[19px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
            <div className="relative tracking-[0.02em] font-medium">
              Adobe Premiere Pro: Full Guide
            </div>
            <div className="relative text-base tracking-[0.02em] text-darkgray">
              Adobe Premiere Pro is a timeline-based video editing software.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[33px] flex-wrap text-5xl mq768:flex-row">
            <ContainerCard
              studentId="/materialsymbolscalendartodayoutline.svg"
              publishDate="11/2/22 "
              studentCount="Published on"
            />
            <ContainerCard
              studentId="/mdiuser.svg"
              publishDate="720"
              studentCount="Students"
              propWidth="unset"
              propFlexShrink="unset"
              propWidth1="unset"
            />
            <ContainerCard
              studentId="/phcurrencycircledollar.svg"
              publishDate="$1202"
              studentCount="Total Revenue"
              propWidth="unset"
              propFlexShrink="unset"
              propWidth1="unset"
            />
          </div>
        </div>
        <img
          className="relative rounded-lg w-[323px] h-[186px] shrink-0 object-cover"
          alt=""
          src="/unsplash5mv818tzxeo3@2x.png"
        />
      </div>
    </div>
  );
};

export default CourseAnalyticsContainer;
