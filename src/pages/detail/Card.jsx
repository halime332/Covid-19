import React from 'react'

const Card = ({item}) => {
  return (
    <div className='p-5 text-black shadow rounded-md '>
        <p className='text-sm font-semibold mb-2 capitalize'>{item[0]}</p>
        <h2 className='text-lg font-bold'>{item[1]}</h2>
    </div>
  )
};

export default Card;