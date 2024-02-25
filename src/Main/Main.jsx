import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";

const Main = () => {
    return (
        <>
        <Home></Home>
            <Outlet></Outlet>
        </>
    );
};

export default Main;