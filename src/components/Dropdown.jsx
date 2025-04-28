"use client"
import React, { useState } from 'react'
import Icons from './common/Icons';
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className="flex gap-2 items-center max-sm:hidden relative cursor-pointer justify-end">
                <p className="font-dm-sans font-normal text-sm md:text-base leading-150 text-off-white max-md:hidden">
                    John Doe
                </p>
                <Icons icon="dropDownIcon" className={`cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                    }`} />
                {isOpen && (
                    <div className="absolute right-0 top-[50px] mt-2 w-40 bg-fade-black border border-solid border-white z-10 text-white rounded-lg shadow-lg hover:border-fade-yellow transition-all duration-300 ease-linear">
                        <p>abcd</p>
                        <p>efgh</p>
                        <p>ijkl</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown