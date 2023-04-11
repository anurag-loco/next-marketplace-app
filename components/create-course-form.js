import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const CreateCourseForm = () => {
  const router = useRouter();

  const onFormSubmitButtonClick = async (e) => {
    e.preventDefault();
    await fetch('/api/createCourse', {
      method: "POST",
      body: JSON.stringify({
        courseName,
        shortDesc,
        longDesc,
        category,
        thumbnail,
        price,
        file
      })
    })
    //router.push("/published-courses");
  };
  let [courseName, setCourseName] = useState()
  let [shortDesc, setShortDesc] = useState()
  let [longDesc, setLongDesc] = useState()
  let [category, setCategory] = useState()
  let [thumbnail, setThumbnail] = useState()
  let [price, setPrice] = useState()
  let [file, setFile] = useState()


  return (
    <form className="self-stretch rounded-xl bg-shades-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[115px] items-center justify-center gap-[19px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
        <b className="self-stretch relative text-5xl leading-[36px] font-poppins text-darkslategray-100 text-center">
          Create a Course
        </b>
        <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray text-center">
          Start selling your own courses by filling up the form below!
        </div>
      </div>
      <div className="self-stretch flex flex-col py-0 px-[39px] items-center justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Name
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch"
            variant="outlined"
            type="text"
            label="Your name"
            size="medium"
            margin="none"
            value={courseName}
            onChange={e => setCourseName(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Short description
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch"
            variant="outlined"
            type="text"
            label="Short Description"
            size="medium"
            margin="none"
            value={shortDesc}
            onChange={e => setShortDesc(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Write a detailed description of the course
          </div>
          <TextField
            className="self-stretch"
            variant="outlined"
            multiline
            rows={4}
            label="Write a detailed description"
            margin="none"
            value={longDesc}
            onChange={e => setLongDesc(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Category
          </div>
          <TextField
            className="self-stretch"
            variant="outlined"
            multiline
            rows={1}
            label="Category of the course"
            margin="none"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Course thumbnail URL
          </div>
          <TextField
            className="self-stretch"
            variant="outlined"
            multiline
            rows={1}
            label="Thumbnail of the course"
            margin="none"
            value={thumbnail}
            onChange={e => setThumbnail(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            File
          </div>
          <TextField
            className="self-stretch"
            variant="outlined"
            multiline
            rows={1}
            label="Add URL of the file"
            margin="none"
            value={file}
            onChange={e => setFile(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative text-base tracking-[0.15px] leading-[24px] font-roboto text-black text-left">
            Price($)
          </div>
          <TextField
            className="self-stretch"
            variant="outlined"
            multiline
            rows={1}
            label="Price of the course"
            margin="none"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
      </div>
      <button
        className="cursor-pointer py-3.5 px-[47px] bg-shades-white rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-black"
        onClick={onFormSubmitButtonClick}
      >
        <div className="relative text-base font-roboto text-black text-center">
          Create
        </div>
      </button>
    </form>
  );
};

export default CreateCourseForm;
