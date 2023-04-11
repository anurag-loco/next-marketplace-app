import Link from "next/link";
import { useRouter } from "next/router";
import MainHeader from "../../components/main-header";
import TeamManagementCourseContainer from "../../components/team-management-course-container";
import CourseListContainer from "../../components/course-list-container";
import Footer from "../../components/footer";
import { prisma } from "../../helpers/prisma";

const StudentHomepage = (props) => {
  const router = useRouter();
  console.log(props)
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

  const onRecCard11Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard21Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard31Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard12Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard22Click = () => {
    router.push("/student-course-page");
  };

  const onRecCard32Click = () => {
    router.push("/student-course-page");
  };

  return (
    <div className="relative bg-shades-white w-full h-[2055.95px] flex flex-col items-start justify-start gap-[3px] text-left text-5xl text-black font-inter">
      <MainHeader
        dimensions="/mask-group1@2x.png"
        onCoursesByJohnClick={onCoursesByJohnClick}
      />
      <TeamManagementCourseContainer />
      <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[88px] items-start justify-start gap-[38px]">
        <CourseListContainer
          courses={props.courses}
       
        />
      </div>
      <Footer productId="/group-562.svg" propFlex="1" />
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { uid } = ctx.params;

  const data = await prisma.user.findUnique({
    where: {
      id: uid
    },
    include: {
      Courses: true
    }
  })
  console.log(data.Courses)
  if (!data) {
    return {
      redirect: {
        destination: '/404'
      }
    }
  }
  return {
    props: {
      courses: JSON.parse(JSON.stringify(data.Courses)) || []
    }
  }
}

export default StudentHomepage;
