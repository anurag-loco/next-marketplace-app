import Link from "next/link";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import TeamManagementCourseContainer from "../components/team-management-course-container";
import CourseListContainer from "../components/course-list-container";
import Footer from "../components/footer";

const StudentHomepage = () => {
  const router = useRouter();

  const onCoursesByJohnClick = () => {
    router.push("/student-homepage");
  };

  const onRecCard1Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard2Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard3Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard11Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard21Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard31Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard12Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard22Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard32Click = () => {
    router.push("/student-course-page");
  };

  return (
    <div className="relative bg-shades-white w-full h-[2055.95px] flex flex-col items-start justify-start gap-[3px] text-left text-5xl text-black font-inter">
      <MainHeader
        dimensions="/mask-group1@2x.png"
        onCoursesByJohnClick={onCoursesByJohnClick}
      />
      <TeamManagementCourseContainer />
      <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[88px] items-start justify-start gap-[38px]">
        <CourseListContainer
          courseTitle="New Courses"
          courseImageUrl="/unsplash5mv818tzxeo7@2x.png"
          coursePrice="PowerBi for Professionals"
          courseDiscountPrice="$165"
          courseImageDimensions="/unsplash5mv818tzxeo8@2x.png"
          courseSubtitle="Google Analytics for Beginners"
          courseOriginalPrice="$189"
          courseImageId="/unsplash5mv818tzxeo9@2x.png"
          courseName="Learn Kuberenetes"
          courseDiscountPrice2="$120"
          onRecCard1Click={onRecCard1Click}
          onRecCard2Click={onRecCard2Click}
          onRecCard3Click={onRecCard3Click}
        />
        <CourseListContainer
          courseTitle="Video Editing"
          courseImageUrl="/unsplash5mv818tzxeo10@2x.png"
          coursePrice="Adobe Premiere Pro: Full Guide"
          courseDiscountPrice="$160"
          courseImageDimensions="/unsplash5mv818tzxeo11@2x.png"
          courseSubtitle="Overlays and Shadows"
          courseOriginalPrice="$125"
          courseImageId="/unsplash5mv818tzxeo12@2x.png"
          courseName="Mastering DaVinci"
          courseDiscountPrice2="$165"
          frame684TextAlign="left"
          priceHeight="unset"
          priceAlignSelf="stretch"
          propFlex="unset"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex1="unset"
          propHeight1="unset"
          propAlignSelf1="stretch"
          propFlex2="unset"
          onRecCard1Click={onRecCard11Click}
          onRecCard2Click={onRecCard21Click}
          onRecCard3Click={onRecCard31Click}
        />
        <div className="self-stretch flex-1 flex flex-col py-2.5 px-[82px] items-start justify-start gap-[10px]">
          <div className="relative leading-[220.52%] font-semibold">
            Programming
          </div>
          <div className="self-stretch grid flex-row items-center justify-center gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] text-xl font-roboto mq768:self-stretch mq768:w-auto mq768:flex-1 mq768:flex-row mq768:items-center mq768:justify-center mq768:flex-wrap">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 rounded-3xs shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start text-[inherit]"
              href="/student-course-page"
              onClick={onRecCard12Click}
            >
              <img
                className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                alt=""
                src="/unsplash5mv818tzxeo13@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke-300">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.02em] font-medium">
                      Getting Started with AWS
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
                    $265
                  </div>
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 rounded-3xs shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start text-[inherit] border-[1px] border-solid border-whitesmoke-200"
              href="/student-course-page"
              onClick={onRecCard22Click}
            >
              <img
                className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                alt=""
                src="/unsplash5mv818tzxeo14@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col py-5 px-4 items-center justify-center">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.02em] font-medium">
                      Master Vue.js
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
                    $130
                  </div>
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 rounded-3xs shadow-[0px_0px_26px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start text-[inherit] border-[1px] border-solid border-whitesmoke-200"
              href="/student-course-page"
              onClick={onRecCard32Click}
            >
              <img
                className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                alt=""
                src="/unsplash5mv818tzxeo15@2x.png"
              />
              <div className="self-stretch rounded-t-none rounded-b-3xs bg-shades-white flex flex-col py-5 px-4 items-center justify-center">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.02em] font-medium">
                      Learn React 18
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[34px] font-inter text-gray-200 text-right">
                    $195
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer productId="/group-562.svg" propFlex="1" />
    </div>
  );
};

export default StudentHomepage;
