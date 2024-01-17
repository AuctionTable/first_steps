import React from 'react';

function Cards({ details }) {
  console.log("here", details);

  return (
    <div className='bg-secondary px-[1rem] py-[0.5rem] rounded-md flex flex-col gap-4'>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      <h1 className='text-accent font-bold'>{details.price}</h1>
    </div>
  );
}

export default Cards;
