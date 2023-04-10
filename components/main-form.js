import CreateCourseForm from "./create-course-form";

const MainForm = () => {
  return (
    <div className="self-stretch bg-whitesmoke-200 flex flex-col pt-[73px] px-[226px] pb-[77px] items-start justify-start gap-[38px] text-center text-5xl text-black font-inter">
      <div className="w-[1440px] hidden flex-col py-2.5 px-[82px] box-border items-start justify-start">
        <b className="relative leading-[220.52%]">Create A Course</b>
      </div>
      <CreateCourseForm />
    </div>
  );
};

export default MainForm;
