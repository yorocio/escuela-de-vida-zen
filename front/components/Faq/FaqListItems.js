'use client'
import React, { useState } from 'react'

const FaqListItems = ({ qa }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={qa}>
            <button
                className="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-900 hover:text-cyan-700 flex items-center mr-4"
                onClick={() => { setIsOpen(!isOpen) }}>
                <p>{qa.question}</p>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="w-3 fill-current ml-auto shrink-0">
                        <path className="plus"
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        <path
                            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="w-3 fill-current ml-auto shrink-0">
                        <path className="plus hidden"
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        <path
                            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                    </svg>
                )}
            </button>
            
            <div className={`${isOpen ? "block" : "hidden"} content pb-6 max-h-[1000px] overflow-hidden transition-all duration-300`}>
                <p className='text-sm text-gray-700'>{qa.answer}</p>

            </div>
        </div>
    )
}

export default FaqListItems