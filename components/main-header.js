import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const MainHeader = ({ dimensions, onCoursesByJohnClick }) => {
  const router = useRouter();
  const user = useUser()
  const supabaseClient = useSupabaseClient()
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
    <div className="self-stretch bg-shades-white flex flex-row py-0 px-[81px] items-center justify-start gap-[12px] text-center text-21xl text-black font-lobster-two mq768:pl-2.5 mq768:pr-2.5 mq768:box-border">
      <div className="w-16 h-[54.38px] shrink-0 flex flex-col py-0 px-[3.9024388790130615px] box-border items-start justify-start mq768:w-auto mq768:h-auto mq768:pr-0 mq768:box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq768:w-[30px]"
          alt=""
          src={dimensions}
        />
      </div>
      <div
        className="relative leading-[220.52%] cursor-pointer sm:text-xs sm:leading-[10px] mq768:text-5xl"
        onClick={onCoursesByJohnClick}
      >
        Courses by John
      </div>
      <div className="flex-1 flex flex-row py-2.5 px-0 items-center justify-end gap-[27px] mq768:gap-[5px]">
        <button
          className="cursor-pointer py-0.5 px-[20px] bg-[transparent] self-stretch rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-lightgray"
          onClick={onCreateBtnClick}
        >
          <div className=" elative text-base leading-[220.52%] font-inter text-black text-center sm:leading-[20px] mq768:text-base mq768:leading-[23px]">
            Create Course
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-0 px-[17px] bg-black self-stretch rounded-3xs flex flex-row items-center justify-center"
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

export default MainHeader;
