import React, { useState } from 'react';

const ProductCard = () => {
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

  const handleColorChange = (index) => {
    setActiveColor(index); // Update active color index
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="container mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="imgBx w-1/2 bg-gray-900 relative flex justify-center items-center">
          <img src={colorOptions[activeColor].picUrl} alt="Product" className="relative w-3/4 transform -rotate-30" style={{ left: '-50px', transition: 'transform 0.9s ease' }} />
          <div className="absolute top-0 left-6 text-black opacity-20 text-8xl font-bold">Nike</div>
        </div>
        <div className="details w-1/2 flex flex-col justify-center items-center p-10">
          <div className="content text-center">
            <h2 className="text-4xl font-semibold leading-tight text-gray-700">
              Jordan Proto-Lyte <br />
              <span className="text-xs text-gray-500 uppercase tracking-wide">Running Collection</span>
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-[85%] mx-auto">{/* Product description here */}</p>
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
            <h3 className="text-4xl font-semibold text-gray-800 mt-8">${/* Price */}</h3>
            <button className="btn bg-black text-white px-8 py-4 mt-4 text-lg uppercase font-semibold rounded-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
