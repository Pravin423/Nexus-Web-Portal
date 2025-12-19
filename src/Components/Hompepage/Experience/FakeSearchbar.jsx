import React from 'react';

const FakeSearchbar = ({ title, click, color }) => {
  return (
    <div 
      style={{ 
        backgroundColor: '#FFFFFFE6', 
        borderColor: color,          
        borderWidth: '2px'            
      }} 
      className='w-[90%] max-w-[672px] h-[67px] rounded-[100px] shadow-lg overflow-hidden border-solid'
    >
      <button 
        onClick={click} 
        className='w-full h-full flex items-center justify-between px-8 transition-colors hover:bg-black/5 group/btn'
      >
        <span 
          style={{ color: color }} 
          className="text-[32px] font-medium"
        >
          {title}
        </span>

        <div 
          style={{ backgroundColor: color }} 
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center shadow-md transition-transform group-hover/btn:translate-x-1"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FakeSearchbar;
