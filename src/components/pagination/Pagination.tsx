import React from 'react'

const Pagination = () => {
    const pages: number[] = [1, 2, 3, 4, 5]
    return (
        <div className='flex items-center justify-center mt-8 mb-20'>
            <div  className='border border-gray-700 px-4 font-bold text-xl cursor-pointer hover:bg-gray-200 transition py-1 text-gray-700 '>
                prev
            </div>
            {
                pages.map((page, index) => {
                    return (
                        <div key={index} className='border border-gray-700 px-4 font-bold text-xl cursor-pointer hover:bg-gray-200 transition py-1 text-gray-700 '>
                            {page}
                        </div>
                    )
                })
            }
            <div className='border border-gray-700 px-4 font-bold text-xl cursor-pointer hover:bg-gray-200 transition py-1 text-gray-700 '>
                next
            </div>

        </div>
    )
}

export default Pagination
