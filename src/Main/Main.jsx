import { Outlet } from "react-router-dom";
import Home from "../components/Home";

const Main = () => {
    return (
        <>
        <Home></Home>
            <Outlet></Outlet>
        </>
    );
};

export default Main;