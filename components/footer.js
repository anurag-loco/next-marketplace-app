import { useMemo } from "react";

const Footer = ({ productId, propFlex }) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="self-stretch bg-black flex flex-row py-10 px-20 items-start justify-start gap-[80px] [border-top:1px] [border-top-style:solid] border-t-darkslategray-0 text-left text-base text-shades-white font-roboto lg:py-6 lg:px-5 lg:box-border lg:[border-top:1px] lg:[border-top-style:solid] lg:border-t-darkslategray-0 lg:gap-[20px] md:flex-col md:p-10 md:box-border md:gap-[20px] md:mt-[30px] sm:py-[30px] sm:px-6 sm:box-border">
      <div
        className="flex flex-col items-start justify-start lg:w-[329px]"
        style={frameDivStyle}
      >
        <img
          className="relative w-[158.47px] h-[36.57px] shrink-0"
          alt=""
          src={productId}
        />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[20px] md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[40px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            Company
          </div>
          <div className="self-stretch relative">About Us</div>
          <div className="self-stretch relative">News</div>
          <div className="self-stretch relative">Careers</div>
          <div className="self-stretch relative">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            Support
          </div>
          <div className="self-stretch relative">FAQ</div>
          <div className="self-stretch relative">US Office</div>
          <div className="self-stretch relative">Asia Office</div>
          <div className="self-stretch relative">Help Center</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            More
          </div>
          <div className="self-stretch relative">Become a partner</div>
          <div className="self-stretch relative">Partner Support</div>
          <div className="self-stretch relative">Driver Requirements</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-xl leading-[27px] font-medium">
            App
          </div>
          <div className="self-stretch relative">Report Bug</div>
          <div className="self-stretch relative">App Helpdesk</div>
          <div className="self-stretch relative">Mobile app links</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
