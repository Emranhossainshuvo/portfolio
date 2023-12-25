import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projects.css";
import Footer from "../Shared/Footer/Footer";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";




const Projects = () => {
  

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="pt-3 w-full mt-5 md:max-w-screen-2xl md:mx-auto flex justify-between">
          <Link to="/">
            <FaLongArrowAltLeft className="bg-[#A9A9A9] w-10 text-[#808080] h-10 rounded-full p-2"></FaLongArrowAltLeft>
          </Link>
          <ul className="md:flex mr-2 ms-2 gap-1 md:gap-8">
            <li className="text-lg font-semibold">Projects</li>
            <Link to="/about">
              <li className="text-lg font-semibold">About</li>
            </Link>
            <Link to="/resume">
              <li className="text-lg font-semibold">Resume</li>
            </Link>
          </ul>
        </div>

        {/* navbar ends */}

       <div data-aos="fade-up">
          <h2 className="text-center mt-40 text-outline">WEB APPLICATIONS</h2>
        </div>

        <div data-aos="fade-up">
          <p className="lg:text-left p-4 lg:ps-[350px] text-lg font-medium">
            As a web developer, I specialize in creating dynamic and visually
            engaging digital experiences. Proficient in HTML, CSS, and
            JavaScript, I build responsive interfaces and collaborate with
            talented teams. Each project I undertake is an opportunity to
            contribute to innovative solutions and share in the joy of success.
            My commitment to clean code and continuous learning ensures
            efficient and high-quality development. Grateful for the chance to
            shape memorable stories, I invite you to explore my work.
          </p>
        </div>

        {/* projects cards here */}

        <div className="grid grid-cols-1 gap-3  mt-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="m-3" data-aos="fade-left">
            <a href="https://bistro-boss-1c45d.web.app/">
              <img
                className="hover:opacity-90 w-[500px] text-black"
                src="https://i.ibb.co/hd5S1PP/2150951471.jpg"
                alt=""
              />
            </a>
            <p>React/Node/Mongodb</p>
            <p>Bistro boss</p>
          </div>
          <div className="m-3" data-aos="zoom-in">
            <a href=" https://car-repair-practice.web.app/">
              <img
                className="hover:opacity-90 w-[500px] h-[286px] text-black"
                src="https://i.ibb.co/j3gQB5k/tim-mossholder-V37i-Tr-YZz2-E-unsplash.jpg"
                alt=""
              />
            </a>
            <p>React/Express/Tailwindcss</p>
            <p>Car Repaire shop</p>
          </div>
          <div className="m-3" data-aos="fade-right">
            <a href="https://coffee-store-24146.web.app/">
              <img
                className="hover:opacity-90 w-[500px] h-[286px] text-black"
                src="https://i.ibb.co/ySLBzJM/nathan-dumlao-Kixf-BEdyp64-unsplash.jpg"
                alt=""
              />
            </a>
            <p>JavaScript/Node/Mongodb</p>
            <p>Coffee store</p>
          </div>
          <div className="m-3" data-aos="fade-left">
            <a href="https://voxly-8257b.web.app">
              <img
                className="hover:opacity-90 w-[500px] h-[286px] text-black"
                src="https://i.ibb.co/y4n5GyL/thisisengineering-raeng-M-Nv-Kw-SOkug-unsplash.jpg"
                alt=""
              />
            </a>
            <p>React/Node/Mongodb</p>
            <p>Voxly</p>
          </div>
          <div className="m-3" data-aos="zoom-in">
            <a href="https://flowlancher.firebaseapp.com/">
              <img
                className="hover:opacity-90 w-[500px] h-[286px] text-black"
                src="https://i.ibb.co/8MVJ9yJ/per-loov-4w-Okqi-XNP7-M-unsplash.jpg"
                alt=""
              />
            </a>
            <p>React/Node/Mongodb</p>
            <p>Flow lancher</p>
          </div>
          <div className="m-3" data-aos="fade-right">
            <a href="https://yoga-and-fitness-96e13.web.app/">
              <img
                className="hover:opacity-90 w-[500px] h-[286px] text-black"
                src="https://i.ibb.co/VBnDnWH/sporty-young-woman-doing-yoga-practice-isolated-concept-healthy-life-natural-balance-body-mental-dev.jpg"
                alt=""
              />
            </a>
            <p>React/Node/Mongodb</p>
            <p>Yoga and fitness</p>
          </div>
        </div>
        <Helmet>
          <title>Shuvo | Projects</title>
        </Helmet>

        <h2>My projects will show here</h2>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Projects;
