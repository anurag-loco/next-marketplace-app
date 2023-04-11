import { useRouter } from "next/router";
import { useState } from "react";

const ConfirmOrder = ({ onClose, price, id }) => {
  const router = useRouter();
  let [email, setEmail] = useState()
  let [name, setName] = useState()
  const onButtonClick = async () => {
    await fetch('/api/createOrder', {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        price,
        id

      })
    })
  };

  return (
    <div className="relative rounded-3xs bg-shades-white box-border w-[459px] h-[358px] flex flex-col py-[7px] px-[15px] items-start justify-start max-w-full max-h-full overflow-auto text-center text-3xl text-darkslategray-100 font-poppins border-[1px] border-solid border-gainsboro-100">
      <button
        className="cursor-pointer [border:none] p-1 bg-[transparent] overflow-hidden flex flex-row items-start justify-start opacity-[0.4]"
        onClick={onClose}
      >
        <div className="relative text-xs leading-[150%] font-roboto text-black text-left">
          X
        </div>
      </button>
      <div className="self-stretch flex-1 rounded-xl bg-shades-white flex flex-col py-7 px-[51px] items-center justify-center gap-[33px]">
        <div className="self-stretch flex flex-col pt-0 px-0 pb-4 items-center justify-start">
          <div className="self-stretch relative leading-[34px] font-semibold">
            Confirm Order
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-[33px] items-start justify-start gap-[10px]">
          <input
            className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
            type="name"
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />
          <input
            className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Email address"
          />

        </div>
        <button
          className="cursor-pointer [border:none] py-2 px-4 bg-black rounded-[3px] w-[115px] flex flex-row box-border items-center justify-center "
          onClick={onButtonClick}
        >
          <b className="relative text-xs leading-[150%] font-roboto text-shades-white text-left">
            Download
          </b>
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
