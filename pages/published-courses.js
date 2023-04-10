import { useRouter } from "next/router";
import Header from "../components/header";
import PublishedCourseListContainer from "../components/published-course-list-container";
import StartContainer from "../components/start-container";
import Footer from "../components/footer";

const PublishedCourses = () => {
  const router = useRouter();

  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

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
    <div className="relative bg-shades-white w-full flex flex-col items-start justify-start gap-[3px]">
      <Header
        yourHomepageJustifyContent="flex-end"
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
      />
      <PublishedCourseListContainer />
      <StartContainer />
      <Footer productId="/group-561.svg" propFlex="unset" />
    </div>
  );
};

export default PublishedCourses;
