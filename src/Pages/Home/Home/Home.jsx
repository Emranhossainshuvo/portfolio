import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import AdminInfo from "../AdminInfo/AdminInfo";
import Banner from '../Banner/Banner'
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Shuvo | Home</title>
            </Helmet>
            <Banner />
            <AdminInfo></AdminInfo>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;