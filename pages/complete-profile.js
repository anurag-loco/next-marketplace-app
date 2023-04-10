import { useRouter } from "next/router";
import Header from "../components/header";
import CompleteProfileForm from "../components/complete-profile-form";
import Footer from "../components/footer";

const CompleteProfile = () => {
  const router = useRouter();

  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col items-start justify-start">
      <Header
        yourHomepageJustifyContent="space-between"
        yourHomepageGap="unset"
        onCoursePlanetClick={onCoursePlanetClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col pt-[57px] px-0 pb-[61px] items-center justify-center">
        <CompleteProfileForm />
      </div>
      <Footer productId="/group-561.svg" propFlex="unset" />
    </div>
  );
};

export default CompleteProfile;
