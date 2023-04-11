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
      <Footer productId="/group-562.svg" propFlex="unset" />
    </div>
  );
};

export default CompleteProfile;


import { prisma } from "../helpers/prisma";
import checkUserProfile from "../helpers/user";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
export async function getServerSideProps(ctx) {
  const client = createServerSupabaseClient(ctx);
  let { data } = await client.auth.getUser()

  let { user } = data
  if (!user) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  else if (user) {
    let userData = await prisma.user.findFirst({
      where: {
        id: user.id
      }
    });
    console.log(userData)
    //checking if user has filled the form already or not
    if (userData && checkUserProfile(userData)) {
      return {
        redirect: {
          destination: '/published-courses'
        }
      }
    }
  }

  return {
    props: {}
  }
}
