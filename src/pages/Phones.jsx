import { useEffect, useState } from "react";
import Phone from "../components/Phone";


const Phones = () => {
    const [phones, setPhones] = useState([]);

    // ?    console.log(phones);
    useEffect(() => {
        fetch('https://phono-server-2goja3lkg-monnas-projects.vercel.app/phone')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return (
        <div className="container mx-auto">
            <div className="text-center my-24">
                <h1 className="text-xl font-bold text-red-500 md:text-4xl ">Our Collections!</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;