import { useMemo } from "react";
import { useRouter } from "next/router";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const Header = ({
  yourHomepageJustifyContent,
  yourHomepageGap,
  onCoursePlanetClick,
}) => {
  const buttonsStyle = useMemo(() => {
    return {
      justifyContent: yourHomepageJustifyContent,
      gap: yourHomepageGap,
    };
  }, [yourHomepageJustifyContent, yourHomepageGap]);

  const router = useRouter();
  const user = useUser()
  const supabaseClient = useSupabaseClient()
  const onYourHomepageClick = () => {


    if (user)
      router.push("/student-homepage/" + user.id);
  };

  const onCreateBtnClick = () => {
    router.push("/create-page");
  };

  const onLoginBtnClick = async () => {
    if (user) {
      await supabaseClient.auth.signOut().then(() => {
        router.push('/')
      })
    } else
      router.push("/");
  };

  return (
    <div className="self-stretch bg-shades-white flex flex-row py-0 px-[29px] items-center justify-between text-center text-21xl text-black font-lobster-two">
      <div
        className="relative leading-[220.52%] cursor-pointer mq768:text-5xl mq768:leading-[20px]"
        onClick={onCoursePlanetClick}
      >
        Course Planet
      </div>
      <div
        className="flex flex-row py-2.5 px-7 items-center justify-end gap-10 mq768:gap-[14px]"
        style={buttonsStyle}
      >
        <button
          className="cursor-pointer [border:none] py-0.5 px-[5px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center"
          onClick={onYourHomepageClick}
        >
          <div className="relative text-base leading-[220.52%] font-inter text-black text-center mq768:leading-[20px]">
            Your Homepage
          </div>
        </button>
        <button
          className="cursor-pointer py-0.5 px-[5px] mx-4 bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-lightgray"
          onClick={onCreateBtnClick}
        >
          <div className="self-stretch relative text-base leading-[220.52%] font-inter text-black text-center flex items-center justify-center mq768:leading-[20px]">
            Create Course
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-0 px-[17px] bg-black rounded-3xs flex flex-row items-center justify-center"
          onClick={onLoginBtnClick}
        >
          <b className="relative text-base leading-[220.52%] font-inter text-shades-white text-center">
            {user ? 'Logout' : 'Login'}
          </b>
        </button>
      </div>
    </div>
  );
};

export default Header;
