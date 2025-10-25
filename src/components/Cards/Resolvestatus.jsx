import React from 'react';

const Resolvestatus = ({resolve}) => {
    console.log(resolve);
    return (
        <div className='bg-[#E0E7FF] rounded-lg shadow-sm p-4'>
            <h2 className='font-semibold'>{resolve.title}</h2>
        </div>
    );
};

export default Resolvestatus;