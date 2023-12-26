import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminDetail from "../Home/AdminDetail/AdminDetail";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      
      <Helmet>
        <title>
          Shuvo | About
        </title>
      </Helmet>
      <AdminDetail></AdminDetail>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default About;
