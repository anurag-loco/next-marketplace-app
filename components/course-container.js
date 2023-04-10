import { useRouter } from "next/router";
import CourseForm from "./course-form";

const CourseContainer = () => {
  const router = useRouter();

  const onRecCard1Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard2Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard3Click = () => {
    router.push("/student-course-page");
  };

  return (
    <div className="self-stretch flex-1 flex flex-col py-2.5 px-[82px] items-start justify-start gap-[10px] text-center text-5xl text-black font-inter mq768:flex-col">
      <div className="relative leading-[220.52%] font-semibold">
        New Courses
      </div>
      <div className="self-stretch grid flex-row items-center justify-start gap-[10px] grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
        <CourseForm
          courseId="/unsplash5mv818tzxeo@2x.png"
          courseName="PowerBi for Professionals"
          coursePrice="$165"
          onRecCard1Click={onRecCard1Click}
        />
        <CourseForm
          courseId="/unsplash5mv818tzxeo1@2x.png"
          courseName="Google Analytics for Beginners"
          coursePrice="$189"
          onRecCard1Click={onRecCard2Click}
        />
        <CourseForm
          courseId="/unsplash5mv818tzxeo2@2x.png"
          courseName="Learn Kuberenetes"
          coursePrice="$120"
          onRecCard1Click={onRecCard3Click}
        />
      </div>
    </div>
  );
};

export default CourseContainer;
