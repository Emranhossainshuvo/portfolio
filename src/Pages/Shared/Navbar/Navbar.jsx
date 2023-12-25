import { Link } from "react-router-dom";
import  logo from '../../../assets/icons8-user-64.png'

const Navbar = () => {
  return (
    <>
      <div className="pt-3 w-full mt-5 md:max-w-screen-2xl md:mx-auto flex justify-between">
         <img className="" src={logo} alt="" />
        <ul className="md:flex mr-2 ms-2 gap-1 md:gap-8">
          <Link to='/projects'><li className="text-lg font-semibold">Projects</li></Link>
          <Link to="/about">
            <li className="text-lg font-semibold">About</li>
          </Link>
          <Link to='/resume'><li className="text-lg font-semibold">Resume</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
