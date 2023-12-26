// import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
// import AdminInfo from "../AdminInfo/AdminInfo";
import Banner from '../Banner/Banner'
import Skills from "../Skills/Skills";
import Projects from "../../Projects/Projects";
import Resume from "../../Resume/Resume";

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
            <Resume></Resume>
            <Footer></Footer>
        </div>
    );
};

export default Home;