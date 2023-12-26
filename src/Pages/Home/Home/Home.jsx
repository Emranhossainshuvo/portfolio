// import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
// import AdminInfo from "../AdminInfo/AdminInfo";
import Banner from '../Banner/Banner'
import Skills from "../Skills/Skills";
import Projects from "../../Projects/Projects";

const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Shuvo | Home</title>
            </Helmet> */}
            <Banner />
            {/* <AdminInfo></AdminInfo> */}
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;