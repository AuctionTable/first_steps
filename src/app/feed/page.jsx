"use client"
import Cards from '@/components/Cards';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get('/api/feed');
            console.log(data);
            setPosts(data.data || []); 

          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
        
      }, []);

      useEffect(() => {
        console.log(posts);
      }, [posts]); // UseEffect will be triggered whenever posts state changes

  return (
    <div className='flex flex-wrap gap-5 items-center justify-center p-[2rem]'>
        <h1 className='text-xl w-[100%] text-center'>Feed</h1>
        {posts.map((post, key) => (
            <Cards key={key} details={post} />
      ))}
    </div>
  )
}

export default page