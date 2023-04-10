import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import ProfessionVideoEditingContaine from "../components/profession-video-editing-containe";
import CourseContainer from "../components/course-container";
import Footer from "../components/footer";

const StudentCoursePage = () => {
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

  return (
    <div className="relative bg-shades-white w-full h-[1357px] flex flex-col items-start justify-start gap-[3px]">
      <MainHeader
        dimensions="/mask-group@2x.png"
        onCoursesByJohnClick={onCoursesByJohnClick}
      />
      <ProfessionVideoEditingContaine />
      <CourseContainer />
      <Footer productId="/group-56.svg" />
    </div>
  );
};

export default StudentCoursePage;
