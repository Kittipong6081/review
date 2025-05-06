import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden mb-10">
      <div className="text-center p-6">
        <img
            src={product.imageUrl}
            alt={product.name}
            className="w-60 h-60 object-cover rounded-2xl mx-auto mb-6 shadow-xl border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-base text-gray-600 mb-4 text-left leading-relaxed">
          {product.description}
        </p>
        <a
            href={product.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            🛒 ซื้อเลย
          </a>
      </div>
    </div>
  );
};

export default ProductCard;
