
import Banner from "../components/Banner";
import Features from "../components/Features";
import Specialty from "../components/Specialty";



const Home = () => {
    return (
        <>
            <Banner autoPlayInterval={5000} ></Banner>
            <Features></Features>
            <Specialty></Specialty>
        </>
    );
};

export default Home;