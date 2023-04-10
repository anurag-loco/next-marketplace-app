import { useState } from "react";
import ConfirmOrder from "./confirm-order";
import PortalPopup from "./portal-popup";

const ProfessionVideoEditingContaine = () => {
  const [isConfirmOrderPopup1Open, setConfirmOrderPopup1Open] = useState(false);
  const [isConfirmOrderPopupOpen, setConfirmOrderPopupOpen] = useState(false);

  const openConfirmOrderPopup1 = () => {
    setConfirmOrderPopup1Open(true);
  };

  const closeConfirmOrderPopup1 = () => {
    setConfirmOrderPopup1Open(false);
  };

  const openConfirmOrderPopup = () => {
    setConfirmOrderPopupOpen(true);
  };

  const closeConfirmOrderPopup = () => {
    setConfirmOrderPopupOpen(false);
  };

  return (
    <>
      <div className="self-stretch flex-1 bg-shades-white flex flex-row pt-1.5 px-12 pb-[49px] items-start justify-center gap-[20px] text-left text-sm text-darkslategray-100 font-roboto md:flex-col">
        <div className="self-stretch flex-1 rounded-[10.52px] flex flex-col py-0 px-[25px] items-start justify-start lg:w-full md:flex-[unset] md:self-stretch">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover sm:w-[100%!important] sm:h-[auto!important]"
            alt=""
            src="/unsplashrezbvcvaspi@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex-1 rounded-[10.52px] bg-shades-white flex flex-col items-center justify-center md:flex-col">
            <div className="self-stretch flex-1 flex flex-col items-start justify-between">
              <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
                <div className="self-stretch flex flex-col items-start justify-start text-13xl font-inter">
                  <b className="self-stretch relative leading-[43.63px]">
                    Profession Video Editing
                  </b>
                  <div className="self-stretch relative text-sm leading-[19.63px] font-roboto">
                    Start editing your video professionally with Adobe Premiere
                    Pro CC!
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[19.63px]">
                    <p className="m-0">{`If you are looking for a video editing application that will allow you to edit videos however you want them, Adobe Premiere Pro is the best answer. Premiere Pro is used by professionals across the world for every type of production from business & marketing videos, music videos to documentaries, feature films. This full course is the best way to jump right in and start editing.`}</p>
                    <p className="m-0">Make videos the way you imagine them!</p>
                    <p className="m-0">
                      Practice editing while you learn. This course includes
                      practice video files so you can follow along and actually
                      learn by doing.
                    </p>
                    <p className="m-0">
                      By the end of the course, you'll have edited a 1-minute
                      documentary with the supplied footage.
                    </p>
                    <p className="m-0">
                      I'll be teaching the course using the creative cloud
                      version, but if you have a previous version (Mac or PC),
                      you can still learn to edit like a pro.
                    </p>
                    <p className="m-0">What makes me qualified to teach you?</p>
                    <p className="m-0">
                      My name is Phil and I've been editing videos with Adobe
                      Premiere Pro for over a decade. Plus I'm the creator of
                      some of the world's most popular video editing courses -
                      with over 3,000,000 students and thousands of 5-star
                      reviews like these from the Adobe Premiere Pro course:
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <b className="relative leading-[19.63px]">
                    Created on 27/11/2022
                  </b>
                  <b className="relative leading-[19.63px]">
                    Creator: Bruce Wayne
                  </b>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start"
                onClick={openConfirmOrderPopup1}
              >
                <div
                  className="rounded-3xs bg-black overflow-hidden flex flex-row py-1.5 px-[22px] items-start justify-start cursor-pointer"
                  onClick={openConfirmOrderPopup}
                >
                  <div className="relative text-sm leading-[19.63px] font-roboto text-shades-white text-left">
                    Buy now
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isConfirmOrderPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmOrderPopup1}
        >
          <ConfirmOrder onClose={closeConfirmOrderPopup1} />
        </PortalPopup>
      )}
      {isConfirmOrderPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmOrderPopup}
        >
          <ConfirmOrder onClose={closeConfirmOrderPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfessionVideoEditingContaine;
