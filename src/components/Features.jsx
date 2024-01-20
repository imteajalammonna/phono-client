import icon1 from "../assets/free-deliver-icon.webp"
import icon2 from "../assets/support-icon.webp"
import icon3 from "../assets/offers-icon.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Features = () => {
    const featuresData = [
        { image: icon1, title: 'Awesome Aroma', description: 'For orders over $50.', animation: "fade-right" },
        { image: icon2, title: 'High Quality', description: 'Save Big on next product.', animation: "fade-up" },
        { image: icon3, title: 'Pure Grades', description: 'Care till the end!', animation: "fade-left" },
    ];
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1000
        });
    }, []);

    return (
        <section  className="bg-[#F9F9F9] border-b">
            <div className="md:container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 md:gap-8">
                    {featuresData.map((feature, index) => (
                        <div data-aos={feature.animation}  key={index} className="md:m-5 md:p-6 py-6 p-6 flex items-center">
                            <img  className="w-14 md:w-16 mb-4" src={feature.image} alt="" />
                            <div className="text-left ml-5">
                            <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm md:text-lg">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;