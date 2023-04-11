import { useRouter } from "next/router";
import { useState } from "react";

const CompleteProfileForm = () => {
  const router = useRouter();
  async function handleClick(e) {
    e.preventDefault()
    if (firstName && lastName && profilePhoto && description) {


      await fetch('/api/createProfile', {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          profilePhoto,
          description
        })
      }).then((res) => {
        router.push('/published-courses')
      })
    }
    else alert('Please fill in all the inputs')


  }
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  const [profilePhoto, setProfilePhoto] = useState();

  return (
    <div className="rounded-xl bg-shades-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] w-[792px] flex flex-col py-7 px-14 box-border items-center justify-center gap-[19px] max-w-[90%]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
        <b className="self-stretch relative text-3xl leading-[36px] font-poppins text-darkslategray-100 text-center">
          Complete Profile
        </b>
        <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray text-center">
          Start selling your own courses by filling up the form below!
        </div>
      </div>
      <form className="self-stretch flex flex-col items-center justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            First name
          </div>
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-2.5 px-3.5 items-start justify-start border-[1px] border-solid border-other-outlined-border1"
            type="text"
            placeholder="John"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Last name
          </div>
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-2.5 px-3.5 items-start justify-start border-[1px] border-solid border-other-outlined-border1"
            type="text"
            placeholder="Smith"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Write a bit about yourself
          </div>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="bg-[transparent] font-roboto text-base self-stretch rounded box-border h-[105px] shrink-0 flex flex-col p-3 items-start justify-start border-[1px] border-solid border-other-outlined-border1"
            placeholder="I am passionate about...."
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left flex items-center w-[162px]">
            Add Profile Photo
          </div>
          <textarea
            value={profilePhoto}
            onChange={e => setProfilePhoto(e.target.value)}
            className="bg-[transparent] font-roboto text-base self-stretch rounded box-border h-[49px] shrink-0 flex flex-col p-3 items-start justify-start border-[1px] border-solid border-other-outlined-border1"
            placeholder="https://unsplash.com/abc/xyz"
          />
        </div>
        <button onClick={handleClick} className=" text-white py-4 cursor-pointer py-2 px-[65px] bg-black rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-black">

          Complete

        </button>
      </form>

    </div>
  );
};

export default CompleteProfileForm;
