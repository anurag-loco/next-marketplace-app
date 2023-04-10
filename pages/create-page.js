import { useRouter } from "next/router";
import Header from "../components/header";
import MainForm from "../components/main-form";
import Footer from "../components/footer";

const CreatePage = () => {
  const router = useRouter();

  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

  return (
    <div className="relative bg-shades-white w-full flex flex-col items-start justify-start gap-[3px]">
      <Header
        yourHomepageJustifyContent="flex-end"
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
      />
      <MainForm />
      <Footer productId="/group-561.svg" propFlex="unset" />
    </div>
  );
};

export default CreatePage;
