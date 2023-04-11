import { useRouter } from "next/router";
import Header from "../../components/header";
import CourseAnalyticsContainer from "../../components/course-analytics-container";
import Footer from "../../components/footer";

const TeachersHub = ({
  sumofRev,
  orders,
  user }) => {
  const router = useRouter();
  let course = user.Courses[0] || {}
  const onCoursePlanetClick = () => {
    router.push("/student-homepage");
  };

  return (
    <div className="relative bg-shades-white w-full flex flex-col items-start justify-start gap-[3px] text-center text-base text-dimgray font-inter">
      <Header onCoursePlanetClick={onCoursePlanetClick} />
      <div className="self-stretch bg-shades-white flex flex-col pt-0 px-0 pb-1 items-start justify-start">
        <div className="self-stretch flex flex-col pt-0 px-0 pb-[88px] items-start justify-start gap-[38px]">
          <CourseAnalyticsContainer
            course={course}
            sumofRev={sumofRev}
            orders={orders || '0'} />
          <div className="self-stretch h-[300px] shrink-0 flex flex-col py-2.5 px-[82px] box-border items-start justify-start gap-[6px]">
            <div className="relative text-xl leading-[220.52%] font-semibold text-black">
              List of Students
            </div>
            <div className="self-stretch flex flex-row py-[3px] px-0 items-start justify-between text-black">
              <div className="flex flex-row items-start justify-start gap-[146px]">
                <div className="relative leading-[220.52%] font-semibold">
                  #
                </div>
                <div className="relative leading-[220.52%] font-semibold">
                  User
                </div>
              </div>
              <div className="relative leading-[220.52%] font-semibold">
                Purchased on
              </div>
            </div>
            <div className="self-stretch bg-gainsboro-200 h-px shrink-0" />
            
            {
              course?.Orders?.map((item,i) => {
                return <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-start gap-[146px]">
                    <div className="relative leading-[220.52%] font-semibold">
                      {i+1}
                    </div>
                    <div className="relative leading-[220.52%] font-semibold">{item.name}</div>
                  </div>
                  <div className="relative leading-[220.52%] font-semibold">
                    {item.createdAt}
                  </div>
                </div>
              })
            }
           
          </div>
        </div>
      </div>
      <Footer productId="/group-561.svg" propFlex="unset" />
    </div>
  );
};


import { prisma } from "../../helpers/prisma";
import checkUserProfile from "../../helpers/user";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
export async function getServerSideProps(ctx) {
  const client = createServerSupabaseClient(ctx);
  let { data } = await client.auth.getUser()
  let { user } = data
  let userData = {}
  let orders = 0
  let sumofRev = 0;
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
        id: user.id,



      },
      include: {

        Courses: {
          where: {
            id: ctx.params.uid
          },
          include: {
            Orders: true,
            _count: {
              select: {
                Orders: true
              }
            }
          }
        }

      },
    });

    if (userData?.Courses?.length > 0) {
      sumofRev = await prisma.orders.aggregate({
        where: {
          coursesId: userData.Courses[0].id
        },
        _sum: {
          price: true
        }
      })
      sumofRev = sumofRev._sum.price
      console.log(sumofRev)
    }
    orders = userData?.Courses[0]._count.Orders

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
      sumofRev,
      orders,
      user: JSON.parse(JSON.stringify(userData))
    }
  }
}
export default TeachersHub;
