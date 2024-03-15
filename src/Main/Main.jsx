import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";
import MainCard from "../components/MainCard/MainCard";

const Main = () => {
    return (
        <>

            <div className="flex">
                <div className="w-64 min-h-full bg-orange-400">
                <MainCard></MainCard>
                </div>
                <div className="flex">
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    );
};

export default Main;