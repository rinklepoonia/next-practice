import { CONTACT_METHOD_DATA_LIST } from '@/utils/helper'
import React, { useState } from 'react'

const MyAccountContactMethod = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (optionId) => {
    setSelectedOption(optionId);
  };
  return (
    <div className='bg-white p-5'>
      <p className='font-semibold text-lg text-black'>Contact Method</p>
      <div className='border  border-solid border-black max-w-[360px] px-4 py-2 rounded'>
        {CONTACT_METHOD_DATA_LIST.map((obj) => (
          <div key={obj.id} className='flex items-center justify-between border-b border-solid border-black cursor-pointer' onClick={() => handleSelect(obj.id)}>
            <p className='text-black font-normal text-base'>{obj.label}</p>
            {selectedOption === obj.id && (
              <span className="text-yellow-500 font-bold">✔</span>
                        )}
          </div>

        ))}
      </div>
    </div>
  )
}

export default MyAccountContactMethod