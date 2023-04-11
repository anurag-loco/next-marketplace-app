import { useRouter } from "next/router";
import Header from "../components/header";
import LoginFormContainer from "../components/login-form-container";
import Footer from "../components/footer";

const Loginpage = () => {
  const router = useRouter();

  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col items-center justify-center gap-[3px]">
      <Header
        yourHomepageJustifyContent="flex-end"
        yourHomepageGap="27px"
        onCoursePlanetClick={onCoursePlanetClick}
      />
      <div className="self-stretch bg-whitesmoke-200 flex flex-col py-20 px-0 items-center justify-center">
        <LoginFormContainer />
      </div>
      <Footer productId="/group-563.svg" propFlex="unset" />
    </div>
  );
};

export default Loginpage;
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
export async function getServerSideProps(ctx) {
  const client = createServerSupabaseClient(ctx);
  let { data } = await client.auth.getUser()
  let { user } = data
  console.log(user)
  if (user)
    return {
      redirect: {
        destination: '/complete-profile'
      }
    }

  return {
    props: {}
  }
}

