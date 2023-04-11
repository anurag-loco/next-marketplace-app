import { useRouter } from "next/router";
import Header from "../components/header";
import PublishedCourseListContainer from "../components/published-course-list-container";
import StartContainer from "../components/start-container";
import Footer from "../components/footer";

const PublishedCourses = (props) => {
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
      {props?.user?.Courses?.length > 0 ?
        <PublishedCourseListContainer courses={props?.user?.Courses || []} /> :
        <StartContainer />
      }


      <Footer productId="/group-561.svg" propFlex="unset" />
    </div>
  );
};

export default PublishedCourses;
import { prisma } from "../helpers/prisma";
import checkUserProfile from "../helpers/user";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
export async function getServerSideProps(ctx) {
  const client = createServerSupabaseClient(ctx);
  let { data } = await client.auth.getUser()
  let { user } = data
  let userData = {}
  if (!user) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  else if (user) {
    userData = await prisma.user.findFirst({
      where: {
        id: user.id
      },
      include: {
        Courses: true
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
    props: {
      user: JSON.parse(JSON.stringify(userData))
    }
  }
}
