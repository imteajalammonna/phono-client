import PropTypes from 'prop-types';

const Phone = ({ phone}) => {

    const { name, model, year, display, processor, storage, camera, price, image } = phone;
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="h-96 w-76" src={image} alt={`Phone ${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Model: {model} <br />
          Year: {year} <br />
          Display: {display} <br />
          Processor: {processor} <br />
          Storage: {storage} <br />
          Camera: {camera} <br />
          Price: {price}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="black-btn p-3 px-6">
          More Details
        </button>
      </div>
    </div>
  );
};
Phone.propTypes={
phone: PropTypes.object
}

export default Phone;
