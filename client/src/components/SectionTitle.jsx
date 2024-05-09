import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex items-center bg-xprimary mb-16'>
        <h1 className='text-2xl text-tertiary font-semibold' >{title}</h1>
        <div className='w-60 h-[1px] bg-tertiary' ></div>
    </div>
  )
}

export default SectionTitle