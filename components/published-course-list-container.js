import { useRouter } from "next/router";
import CourseCard from "./course-card";

const PublishedCourseListContainer = () => {
  const router = useRouter();

  const onRecCard1Click = () => {
    router.push("/teachers-hub");
  };

  const onRecCard2Click = () => {
    router.push("/teachers-hub");
  };

  const onRecCard3Click = () => {
    router.push("/teachers-hub");
  };

  return (
    <div className="self-stretch flex flex-col pt-0 px-0 pb-[88px] items-center justify-start text-left text-5xl text-black font-inter">
      <div className="self-stretch flex flex-col py-2.5 px-[62px] items-start justify-start gap-[10px] mq768:items-start mq768:justify-center mq768:pl-[41px] mq768:pr-[41px] mq768:box-border">
        <div className="flex flex-row items-start justify-start">
          <div className="relative leading-[220.52%] font-semibold mq768:leading-[30px]">
            My Published Courses
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-xl text-darkslategray-200 font-roboto mq768:flex-row">
          <div className="self-stretch grid flex-row items-center justify-start gap-[20px] grid-cols-[repeat(auto-fit,_minmax(240px,1fr))]">
            <CourseCard
              devOpsText="/unsplash5mv818tzxeo4@2x.png"
              softwareTestingText="DevOps"
              devOpsImageUrl="DevOps is a methodology in the softwa..."
              onRecCard1Click={onRecCard1Click}
            />
            <CourseCard
              devOpsText="/unsplash5mv818tzxeo5@2x.png"
              softwareTestingText="Software Testing"
              devOpsImageUrl="Software testing is the act of exa..."
              propBackgroundColor="unset"
              onRecCard1Click={onRecCard2Click}
            />
            <CourseCard
              devOpsText="/unsplash5mv818tzxeo6@2x.png"
              softwareTestingText="Technical Writing"
              devOpsImageUrl="Technical writing is writing or drafting..."
              propBackgroundColor="unset"
              onRecCard1Click={onRecCard3Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedCourseListContainer;
