import bannerImg from "../../../assets/IMG_20231209_083938-removebg.png";
import About from "../../About/About";
// import Navbar from "../../Shared/Navbar/Navbar";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="md:justify-around md:items-center md:max-w-screen-2xl md:mx-auto md:flex  md:flex-row-reverse text-black">
        <div data-aos="fade-up">
          <img
            className="md:max-w-screen-sm md:mx-auto"
            src={bannerImg}
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="md:max-w-[40%] p-2 mx-auto mt-5 ">
          <h1 data-aos="fade-up" className="text-4xl  mb-4 font-semibold">Hi, I'm <span className="text-[#F54200]">Md. Emran Hossain</span> </h1>
          <p data-aos="fade-up" className="text-lg font-semibold mb-5 text-justify">
            I'm a junior full stack developer.I build fully functional interactive full stack web applications. I am very much interested in technology world since I just knew about it. I choose web development because I think I can learn with fun many things in this field and I can show my telent in visual content. 
            I am currently working on my{" "}
            <a
              href="https://flowlancher.firebaseapp.com/"
              className=" hover:cursor-pointer font-semibold text-[#F54200] hover:underline text-lg"
            >
              {" "}
              Mesh{" "}
            </a>{" "}
            project. An online-based language learning app.
          
          </p>
          <p data-aos="fade-up" className="text-lg font-semibold text-justify">
            I'm from Chnadpur Bangladesh, although I'm currently living in Dhaka Bangladesh. I'm studying Geography and Environment for my BSc at Government Titumir College.
          </p>
        </div>
      </div>
      <About></About>
    </>
  );
};

export default Banner;
