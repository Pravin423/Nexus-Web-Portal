import React from 'react';
import Image from 'next/image';

const ExpCard = ({ image }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {image ? (
        <Image 
          src={image} 
          alt="Experience" 
          width={800} 
          height={600} 
          className="object-contain rounded-lg"
        />
      ) : (
        <p className="text-gray-500 text-lg">No Image</p>
      )}
    </div>
  );
};

export default ExpCard;
