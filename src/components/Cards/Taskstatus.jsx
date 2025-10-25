import React from 'react';

const Taskstatus = ({inpro, handleopen}) => {

    return (
        <div className='bg-white rounded-lg shadow-sm p-4'>
            <h2 className='font-semibold'>{inpro.title}</h2>
            <button onClick={()=>handleopen(inpro)} className='mt-1 bg-[#02A53B] w-full text-white text-sm text-center py-1 rounded-md'>Complete</button>
        </div>
    );
};

export default Taskstatus;