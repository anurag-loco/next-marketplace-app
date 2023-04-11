import { useRouter } from "next/router";
import CourseCard from "./course-card";

const PublishedCourseListContainer = ({ courses }) => {
  const router = useRouter();

  const onRecCard1Click = (id) => {
    console.log("/teachers-hub/" + id)
    router.push("/teachers-hub/" + id);
  };

  console.log(courses)
  return (
    <div className="self-stretch flex flex-col pt-0 px-0 pb-[88px] items-center justify-start text-left text-5xl text-black font-inter">
      <div className="self-stretch flex flex-col py-2.5 px-[62px] items-start justify-start gap-[10px] mq768:items-start mq768:justify-center mq768:pl-[41px] mq768:pr-[41px] mq768:box-border">
        <div className="flex flex-row items-start justify-start">
          <div className="relative leading-[220.52%] font-semibold mq768:leading-[30px]">
            My Published Courses
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-xl text-darkslategray-200 font-roboto mq768:flex-row">
          <div className="self-stretch grid flex-row items-center justify-start gap-[20px] grid-cols-[repeat(auto-fit,_minmax(240px,1fr))]">
            {
              courses.map((item, i) => {
                return <CourseCard
                  devOpsText={item.thumbnail}
                  softwareTestingText={item.name}
                  devOpsImageUrl={item.shortDescription}
                  id={item.id}
                  onRecCard1Click={(id) => onRecCard1Click(id)}
                />
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedCourseListContainer;
