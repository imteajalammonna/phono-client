
import Banner from "../components/Banner";
import Features from "../components/Features";
import Specialty from "../components/Specialty";
import Phones from "./Phones";



const Home = () => {
    return (
        <>
            <Banner autoPlayInterval={5000} ></Banner>
            <Features></Features>
            <Specialty></Specialty>
            <Phones></Phones>
        </>
    );
};

export default Home;