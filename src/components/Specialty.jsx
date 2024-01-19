import icon1 from "../assets/ic11.webp";
import icon2 from "../assets/ic12.webp";
import icon3 from "../assets/ic13.avif";

const Specialty = () => {
    return (
        <div className="space-y-3 my-14">
            <h2 className="text-center text-xl md:text-5xl font-bold">WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
            <p className="text-center text-sm md:text-xl !mb-16 text-gray-500">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-3">
                    <img className="w-20 md:w-36" src={icon2} alt="" />
                    <p className=" text-sm md:text-xl ">Perfect Cut</p>
                    <h4 className="text-lg  font-bold md:text-3xl ">DUAL CAMERA</h4>
                    <p className="text-lg md:text-xl mx-4 text-gray-400">Tristique senectus et netus et malesuada ant reiet fames.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                    <img className="w-20 md:w-36" src={icon3} alt="" />
                    <p className="text-sm md:text-xl ">Pretty</p>
                    <h4 className="text-lg font-bold  md:text-3xl">INTELLIGENT PROCESSING</h4>
                    <p className="text-lg md:text-xl mx-4 text-gray-400">Tristique senectus et netus et malesuada ant reiet fames.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3">
                    <img className="w-20 md:w-36 " src={icon1} alt="" />
                    <p className="text-sm md:text-xl ">Perfect Cut</p>
                    <h4 className="text-lg font-bold  md:text-3xl">8GB DDR5 RAM</h4>
                    <p className="text-lg md:text-xl mx-4 text-gray-400">Tristique senectus et netus et malesuada ant reiet fames.</p>
                </div>
            </div>
        </div>
    );
};

export default Specialty;