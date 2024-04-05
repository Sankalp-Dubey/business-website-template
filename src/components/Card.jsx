import React from 'react'

const Card = ({ styles,title,description,source }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] w-[450px] h-[400px]`}>
    <div className=' items-center justify-center flex'>
    <img height="50px" width="50px" alt='Your Alt Text' src={source}></img>
    </div>
      <div className='text-2xl font-bold'>
      {title}
      </div>
      <div className='my-5'>
        {description}
      </div>
    </button>
  )
}

export default Card
