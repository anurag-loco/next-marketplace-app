import { useRouter } from "next/router";

const TeamManagementCourseContainer = () => {
  const router = useRouter();

  const onButtonClick = () => {
    router.push("/student-course-page");
  };

  return (
    <div className="self-stretch flex flex-col py-0 px-20 items-start justify-start text-left text-17xl text-black font-inter mq768:pl-[50px] mq768:pr-[50px] mq768:box-border">
      <div className="self-stretch rounded-mini bg-linen flex flex-row items-center justify-start gap-[70px] md:flex-col md:items-center md:justify-start md:pt-[3rem] md:box-border">
        <div className="flex-1 flex flex-col py-0 px-[49px] items-start justify-start gap-[31px] md:gap-[25px] md:items-center md:justify-center md:pl-0 md:pr-0 md:box-border md:flex-[unset] md:self-stretch">
          <div className="w-[450px] flex flex-col items-start justify-start gap-[2px] md:items-start md:justify-start">
            <b className="self-stretch relative leading-[80.5%] md:text-center">
              Team Management Course
            </b>
            <div className="self-stretch relative text-xl leading-[167.02%] md:text-center">
              Learn how to manage and grow with your team.
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-0 px-5 bg-black rounded-3xs flex flex-row items-start justify-start"
            onClick={onButtonClick}
          >
            <div className="relative text-xl leading-[220.52%] font-semibold font-inter text-shades-white text-center">
              Check out
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative rounded-smi max-w-full overflow-hidden h-[358.57px] object-cover md:flex-[unset] md:self-stretch"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </div>
  );
};

export default TeamManagementCourseContainer;
