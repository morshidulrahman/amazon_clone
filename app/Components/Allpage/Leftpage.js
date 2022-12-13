import React from 'react'


const Leftpage = ({ selectcategory, categoryhandeler, category }) => {

    return (
        <div className='md:px-4 md:text-center px-4 shadow border border-gray-50 bg-white rounded-md'>
            <h1 className='text-2xl font-semibold mb-5 mt-2'>Categorys</h1>
            <div className='flex md:items-center flex-col gap-2'>
                {category?.map((item, i) => (
                    <p
                        key={i}
                        onClick={() => categoryhandeler(item)}
                        className={`${selectcategory === item ? "text-yellow-400" : "text-gray-600"} text-lg font-semibold capitalize cursor-pointer`}
                    >{item}</p>
                ))}
            </div>
        </div >
    )
}

export default Leftpage