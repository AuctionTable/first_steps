"use client"
import Cards from '@/components/Cards';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FeedPage() {

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
    <div className='w-[90%] sm:w-[80%] md:w-[40rem] lg:w-[48rem] xl:w-[58rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-wrap gap-[1rem]'>
        <h1 className="w-[100%] text-[1.5rem] text-center font-medium">Feed</h1>
        {posts.map((post, key) => (
            <Cards key={key} details={post} />
      ))}
    </div>
  )
}

export default FeedPage