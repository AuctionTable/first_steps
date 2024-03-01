import React from 'react';

function Cards({ details }) {

  return (
    <a href={`/feed/${details._id}`} className='w-[100%] sm:w-[45%] flex-grow bg-secondary p-[1rem] rounded-lg flex flex-col gap-[0.75rem]'>
      <h1 className='text-[1.5rem] font-medium'>{details.title}</h1>
      <p>{details.description}</p>
      <h1 className='text-accent font-bold text-[1.5rem]'>₹ {details.price}</h1>
    </a>
  );
}

export default Cards;
