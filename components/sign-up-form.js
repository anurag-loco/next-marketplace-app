import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [newpassword, setNewPassword] = useState('')

  const supabaseClient = useSupabaseClient()
  const onButtonClick = async (e) => {
    e.preventDefault()
    if (newpassword == password) {
      async function handleAuth() {
        await supabaseClient.auth.signUp({
          email,
          password
        })
          .then(async () => {
            await fetch('/api/createuser')
            router.push('/complete-profile')
          })
          .catch(e => console.error(e))
      }
      await handleAuth()

    }
    else alert('pass dont match')
  };

  const user = useUser()

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <form className="rounded-xl bg-shades-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border w-[518px] h-[418px] shrink-0 flex flex-col py-7 px-[51px] items-center justify-center gap-[33px] max-w-[90%] border-[1px] border-solid border-whitesmoke-300">
      <div className="self-stretch flex flex-col pt-0 px-0 pb-4 items-center justify-start">
        <div className="self-stretch relative text-3xl leading-[34px] font-semibold font-poppins text-darkslategray-100 text-center">
          Sign up
        </div>
      </div>
      <div className="self-stretch flex flex-col py-0 px-[33px] items-start justify-start gap-[10px]">
        <input
          className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Username or email address"
        />
        <input
          className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          className="font-roboto text-xs bg-shades-white self-stretch rounded overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start leading-[18px] [outline:none] border-[1px] border-solid border-studio-lightmode-midseparator-dee3eb"
          type="password"
          value={newpassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-black rounded-lg flex flex-row items-center justify-center"
        onClick={onButtonClick}
      >
        <b className="relative text-xs leading-[150%] font-roboto text-shades-white text-left">
          Create Account
        </b>
      </button>
    </form>
  );
};

export default SignUpForm;
