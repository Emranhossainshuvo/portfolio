
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from '../../assets/Md.Emran.Hossain.pdf';
import { Helmet } from "react-helmet-async";

const imageUrl = "https://i.ibb.co/6tCYd6G/businessman-giving-hand-shake.jpg"; // Replace with your actual image URL

const Resume = () => {
  return (
    <>
      <div className="pt-3 w-full mt-5 md:max-w-screen-2xl md:mx-auto flex justify-between">
        {/* <Helmet>
          <title>
            Shuvo | Resume
          </title>
        </Helmet> */}
        
      </div>
      <div className="mt-8 mx-auto text-center">
        <img src={imageUrl} alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h4 className="text-3xl font-semibold mb-4">Welcome to My Resume Page</h4>
        <a
          href={resume}
          download
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
