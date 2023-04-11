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
    if (userData && !checkUserProfile(userData)) {
      return {
        redirect: {
          destination: '/complete-profile'
        }
      }
    }
  }


  return {
    props: {}
  }
}
export default CreatePage;
