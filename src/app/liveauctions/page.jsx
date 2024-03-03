"use client"
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards';
import axios from 'axios'

function page() {
  const [filter, setFilter] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get();
  }, [filter])

  async function get() {
    try {
      const { data } = await axios.get('/api/liveonly?type=live');
      console.log('Fetched posts:', data); // Add this line to check the value of data
      setPosts(data.data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  }

  return (
    <div className='relative w-[90%] h-screen sm:w-[80%] md:w-[40rem] lg:w-[48rem] xl:w-[58rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-col gap-[1rem]'>
      <a className='btn-primary bg-secondary text-accent outline-accent absolute right-0 mr-[1rem] sm:mr-[2rem] py-[0.25rem]' href="/profile">Profile</a>
      <h1 className="w-[100%] text-[1.5rem] text-center font-semibold">Live Auctions</h1>
      <input type="text" placeholder='search' onChange={(e) => setFilter(e.target.value)} className='w-[100%] p-[0.5rem]' />
      <div className='w-[100%] flex flex-wrap gap-[1rem] justify-between'>
        { posts.map((post, key) => (
          <Cards key={key} details={post} />
        ))}
      </div>
    </div>
  );
}

export default page;
