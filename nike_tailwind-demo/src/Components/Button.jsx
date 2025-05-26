import React from 'react'

function Button({label,iconUrl}) {
  return (
    <div> 
      <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg bg-red-400 rounded-full text-white border-red-600 leading-none'>
        {label}
        <img src={iconUrl} className='ml-2 rounded-full w-5 h-5' alt="" />
      </button>
    </div>
  )
}

export default Button
