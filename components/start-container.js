import { useRouter } from "next/router";

const StartContainer = () => {
  const router = useRouter()
  const onCreateBtnClick = () => {
    router.push("/create-page");
  };
  return (
    <div className="self-stretch flex flex-col pt-0 px-0 pb-[88px] items-center justify-start text-center text-13xl text-black font-inter">
      <div className="w-[1211px] flex flex-col p-2.5 box-border items-center justify-center gap-[10px] max-w-[90%]">
        <div className="w-[61px] h-[61px] shrink-0 flex flex-row items-start justify-start">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/materialsymbolsmagicbutton.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative tracking-[0.02em] font-semibold">{`Let’s get started! `}</div>
        </div>
        <button onClick={onCreateBtnClick} className="cursor-pointer [border:none] py-3 px-px bg-black rounded-3xs w-[303px] flex flex-row box-border items-center justify-center max-w-[90%]">
          <div className="relative text-5xl tracking-[0.02em] font-semibold font-inter text-shades-white text-center">{`Add your first course `}</div>
        </button>
      </div>
    </div>
  );
};

export default StartContainer;
