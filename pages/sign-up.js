import { useRouter } from "next/router";
import Header from "../components/header";
import SignUpForm from "../components/sign-up-form";
import Footer from "../components/footer";

const SignUp = () => {
  const router = useRouter();

  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col items-start justify-start gap-[3px]">
      <Header
        yourHomepageJustifyContent="flex-end"
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col py-20 px-[30px] items-center justify-center">
        <SignUpForm />
      </div>
      <Footer productId="/group-564.svg" propFlex="unset" />
    </div>
  );
};

export default SignUp;
