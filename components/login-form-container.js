import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginFormContainer = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const onButtonClick = async (e) => {
    e.preventDefault()

    async function handleAuth() {
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      })
        .then(() => {
          router.push('/complete-profile')
        })
        .catch(e => console.error(e))
    }
    await handleAuth()

  }



  const onNewUserSignClick = () => {
    router.push("/sign-up");
  };




  return (
    <div className="rounded-xl bg-shades-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border w-[518px] h-[418px] shrink-0 flex flex-col py-7 px-[51px] items-center justify-center gap-[33px] max-w-[90%] text-center text-3xl text-darkslategray-100 font-poppins border-[1px] border-solid border-whitesmoke-300">
      <div className="self-stretch flex flex-col pt-0 px-0 pb-4 items-center justify-start">
        <div className="self-stretch relative leading-[34px] font-semibold">
          Login
        </div>
      </div>
      <div className="self-stretch flex flex-col py-0 px-[33px] items-start justify-start gap-[10px]">
        <input
          className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username or email address"
        />
        <input
          className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-black rounded-lg w-[115px] overflow-hidden flex flex-row box-border items-center justify-center"
        onClick={onButtonClick}
      >
        <div className="relative text-xs leading-[150%] font-semibold font-roboto text-shades-white text-left">
          Login
        </div>
      </button>
      <div
        className="relative text-2xs [text-decoration:underline] leading-[150%] font-roboto text-black inline-block w-[148px] h-[15px] shrink-0 cursor-pointer"
        onClick={onNewUserSignClick}
      >
        New user? Sign up!
      </div>
    </div>
  );
};

export default LoginFormContainer;
