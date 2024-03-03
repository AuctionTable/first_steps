import React, { useEffect, useState } from 'react';

function Cards({ details }) {

  const [status, setStatus] = useState('ok')

  async function check() {

    const today = new Date().getTime();
    //console.log(details.startDate.split("T")[0])

    const startDate = new Date(details.startDate).getTime()
    const endDate = new Date(details.endDate).getTime()

    console.log("Current time:", today);
    console.log("End date:", startDate + "hehe" + endDate);
  
    if (startDate > today) {
      setStatus("Not opened");
    } else if (today >= startDate && today <= endDate) {
      setStatus("Active");
    } else {
      setStatus("Ended");
    }
  }

  useEffect(() => {
    check()
  }, [])

  return (
    <a href={`/feed/${details._id}`} className='relative w-[100%]  bg-secondary p-[1rem] rounded-lg flex flex-col gap-[0.75rem]'>
      <div className='btn-primary bg-secondary text-accent outline-accent absolute right-0 mr-[1rem] top-[1rem] rounded-md px-[0.5rem] py-[0.25rem] text-[0.75rem]'>
        {status}
      </div>
      <h1 className='text-[1.5rem] font-medium'>{details.title}</h1>
      <p className='truncate'>{details.description}</p>
      <h1 className='text-accent font-bold text-[1.5rem]'>₹ {details.price}</h1>
    </a>
  );
}

export default Cards;
