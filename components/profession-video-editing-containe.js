import { useState } from "react";
import ConfirmOrder from "./confirm-order";
import PortalPopup from "./portal-popup";

const ProfessionVideoEditingContaine = (props) => {
  let {
    name,
    shortDescription,
    bigDescription,
    thumbnail,
    category,
    price,
    createdAt,
    id
  } = props.course
  const d = new Date(createdAt)
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
            src={thumbnail}
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex-1 rounded-[10.52px] bg-shades-white flex flex-col items-center justify-center md:flex-col">
            <div className="self-stretch flex-1 flex flex-col items-start justify-between">
              <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
                <div className="self-stretch flex flex-col items-start justify-start text-13xl font-inter">
                  <b className="self-stretch relative leading-[43.63px]">
                    {name}
                  </b>
                  <div className="self-stretch relative text-sm leading-[19.63px] font-roboto">
                    {shortDescription}
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[19.63px]">
                    {/* <p className="m-0">{`If you are looking for a video editing application that will allow you to edit videos however you want them, Adobe Premiere Pro is the best answer. Premiere Pro is used by professionals across the world for every type of production from business & marketing videos, music videos to documentaries, feature films. This full course is the best way to jump right in and start editing.`}</p>
                    <p className="m-0">Make videos the way you imagine them!</p> */}
                    <p className="m-0">
                      {bigDescription}
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <b className="relative leading-[19.63px]">
                    Created on {d.toLocaleDateString()}
                  </b>
                  <b className="relative leading-[19.63px]">
                    Creator: {props.course.User.firstName + ' ' + props.course.User.lastName}
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
          <ConfirmOrder price={price} id={id} onClose={closeConfirmOrderPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfessionVideoEditingContaine;
