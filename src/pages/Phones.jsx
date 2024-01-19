import { useEffect, useState } from "react";
import Phone from "../components/Phone";


const Phones = () => {
    const [phones, setPhones] = useState([]);

// ?    console.log(phones);
    useEffect(() => {
        fetch('http://localhost:5000/phone')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;