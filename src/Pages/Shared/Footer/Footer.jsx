import moment from "moment";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div data-aos="zoom-in">
      <footer className="text-center p-8 mt-16 bg-gray-800 text-white">
        <p className="text-lg font-semibold">Connect with me:</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://github.com/Emranhossainshuvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/md-emran-hossain-shuvo-0711802a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100094220312855">
            <FaFacebook></FaFacebook>
          </a>
        </div>
        <p className="mt-4">
          &copy; {moment().format("YYYY")} Md Emran Hossain Shuvo. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
