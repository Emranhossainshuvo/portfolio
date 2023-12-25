import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminDetail from "../Home/AdminDetail/AdminDetail";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      <div className="pt-3 w-full mt-5 md:max-w-screen-2xl md:mx-auto flex justify-between">
        <Link to="/">
          
          <FaLongArrowAltLeft className="bg-[#A9A9A9] w-10 text-[#808080] h-10 rounded-full p-2"></FaLongArrowAltLeft>
        </Link>
        <ul className="md:flex mr-2 ms-2 gap-1 md:gap-8">
          <Link to="/projects"><li className="text-lg font-semibold">Projects</li></Link>
            <li className="text-lg font-semibold">About</li>
          <Link to='/resume'><li className="text-lg font-semibold">Resume</li></Link>
        </ul>
      </div>
      <Helmet>
        <title>
          Shuvo | About
        </title>
      </Helmet>
      <AdminDetail></AdminDetail>
      <Footer></Footer>
    </div>
  );
};

export default About;
