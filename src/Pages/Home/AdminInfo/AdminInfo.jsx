import { MdOutlineLocationOn } from "react-icons/md";
import "aos/dist/aos.css";

const AdminInfo = () => {
  return (
    <>
      <div className="text-center mt-10 text-[#999d9ea4]">
        <div>
          <h3 data-aos="fade-up" className="text-5xl font-semibold">
            Hi, I'm Shuvo.
          </h3>
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center items-center mt-10 mb-10"
        >
          <MdOutlineLocationOn />
          <h3 className="text-xl font-semibold"> Dhaka, Bangladesh </h3>
        </div>
        <div data-aos="fade-up">
          <p className="text-[#999d9ea4]">
            I am currently working on my{" "}
            <a
              href="https://flowlancher.firebaseapp.com/"
              className="text-[#999d9ea4] hover:cursor-pointer font-semibold text-lg"
            >
              {" "}
              Mesh{" "}
            </a>{" "}
            project. <br></br> A online-based language learning app.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
