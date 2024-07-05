import React, { useState } from 'react';
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(0); // State to manage active color index

  // Array to hold color options with their respective data
  const colorOptions = [
    {
      name: 'Black',
      primaryColor: '#000',
      secondaryColor: '#212121',
      picUrl: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true'
    },
    {
      name: 'Red',
      primaryColor: '#7e021c',
      secondaryColor: '#bd072d',
      picUrl: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true'
    },
    {
      name: 'Orange',
      primaryColor: '#ce5b39',
      secondaryColor: '#f18557',
      picUrl: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true'
    }
  ];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleColorChange = (index) => {
    setActiveColor(index); // Update active color index
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center w-full max-sm:w-full shadow-3xl p-5">
      <div className="relative">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="absolute top-0 left-0 mt-8 ml-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-3 text-2xl leading-normal font-bold font-palanquin">{name}</h3>
        <div className='flex justify-between items-center'>
            <p className="mt-3 font-semibold font-montserrat text-coral-green text-xl">{price}</p>
            <button onClick={toggleModal} className="mt-3 font-semibold font-montserrat text-coral-green text-xl">View Details</button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className={`modal-content rounded-lg overflow-hidden w-full max-w-6xl ${colorOptions[activeColor].primaryColor}`}>
            <div className="flex justify-center items-center min-h-screen">
              <div className="container mx-4 bg-white rounded-lg  overflow-hidden" style={{ boxShadow: `0 10px 15px -3px ${colorOptions[activeColor].primaryColor}, 0 4px 6px -4px ${colorOptions[activeColor].primaryColor}` }}>
                <div className="imgBx w-1/2 bg-gray-900 relative flex justify-center items-center" style={{ backgroundColor: colorOptions[activeColor].secondaryColor }}>
                  <img src={colorOptions[activeColor].picUrl} alt="Product" className="relative w-3/4 transform -rotate-30" style={{ left: '-50px', transition: 'transform 0.9s ease' }} />
                </div>
                <div className="details w-1/2 flex flex-col justify-center items-center p-10">
                  <div className="content text-center flex items-center justify-center flex-col gap-4 w-full">
                    <h2 className="text-4xl font-semibold leading-tight text-gray-700">
                      {name} <br />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Running Collection</span>
                    </h2>
                    <div className="product-colors mt-6 flex items-center justify-center">
                      {colorOptions.map((color, index) => (
                        <span
                          key={index}
                          className={`color-option ${index === activeColor ? 'active' : ''} w-8 h-8 rounded-full cursor-pointer`}
                          style={{ backgroundColor: color.primaryColor }}
                          onClick={() => handleColorChange(index)}
                        ></span>
                      ))}
                    </div>
                    <h3 className="text-4xl font-semibold text-gray-800 mt-8">{price}</h3>
                    <div className='product-colors mt-6 flex items-center justify-center mt-8 gap-4'>
                        <button className="btn bg-black text-white px-8 py-4 mt-4 text-lg uppercase font-semibold rounded-full">Buy Now</button>
                        <button onClick={toggleModal} className="btn bg-black text-white px-8 py-4 mt-4 text-lg uppercase font-semibold rounded-full">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularProductCard;
