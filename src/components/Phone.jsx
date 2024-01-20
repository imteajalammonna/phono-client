import PropTypes from 'prop-types';
import { TbPointFilled } from "react-icons/tb";

const Phone = ({ phone }) => {

    const { name, model, display, camera, price, image } = phone;
    return (
        <div className="w-[320px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="flex items-center justify-center bg-gray-300 m-4 p-3 rounded-xl">
                
            <img className="h-64 hover:scale-110 duration-300" src={image} alt={`Phone ${name}`} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                <p className='flex items-center font-medium'> <TbPointFilled className='mr-2'/> Model: {model}</p>
                <p className='flex items-center font-medium'> <TbPointFilled className='mr-2'/> Display: {display.slice(0,10)}</p>
                <p className='flex items-center font-medium'> <TbPointFilled className='mr-2'/> Camera: {camera}</p>
                <p className='flex items-center font-medium'> <TbPointFilled className='mr-2'/> Price: {price}</p>
                </p>
            </div>
            <div className="px-6 py-4">
                <button className="black-btn p-3 px-6 w-full">
                    More Details
                </button>
            </div>
        </div>
    );
};
Phone.propTypes = {
    phone: PropTypes.object
}

export default Phone;
