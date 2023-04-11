import { useRouter } from "next/router";
import Header from "../components/header";
import CourseAnalyticsContainer from "../components/course-analytics-container";
import Footer from "../components/footer";

const TeachersHub = () => {
  const router = useRouter();

  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

  return (
    <div className="relative bg-shades-white w-full flex flex-col items-start justify-start gap-[3px] text-center text-base text-dimgray font-inter">
      <Header onCoursePlanetClick={onCoursePlanetClick} />
      <div className="self-stretch bg-shades-white flex flex-col pt-0 px-0 pb-1 items-start justify-start">
        <div className="self-stretch flex flex-col pt-0 px-0 pb-[88px] items-start justify-start gap-[38px]">
          <CourseAnalyticsContainer />
          <div className="self-stretch h-[300px] shrink-0 flex flex-col py-2.5 px-[82px] box-border items-start justify-start gap-[6px]">
            <div className="relative text-xl leading-[220.52%] font-semibold text-black">
              List of Students
            </div>
            <div className="self-stretch flex flex-row py-[3px] px-0 items-start justify-between text-black">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  #
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  User
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                Purchased on
              </div>
            </div>
            <div className="self-stretch bg-gainsboro-200 h-px shrink-0" />
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  1
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  Michael Smith
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                19/12/22
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  2
                </div>
                <div className="relative leading-[220.52%] font-semibold">{`Francesco `}</div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                14/12/22
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  3
                </div>
                <div className="relative leading-[220.52%] font-semibold inline-block w-[100px] shrink-0">
                  Pedri Andres
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                04/12/22
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  4
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  Robert McGill
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                01/12/22
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer productId="/group-562.svg" propFlex="unset" />
    </div>
  );
};

export default TeachersHub;
