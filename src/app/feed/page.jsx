"use client"
import Cards from '@/components/Cards';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FeedPage() {

    const [posts, setPosts] = useState([])
    const [errors, setErrors] = useState(null); // State to hold validation errors
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const { data } = await axios.get('/api/feed');
            console.log(data);
            setPosts(data.data || []); 

          } catch (error) {
            setErrors(error)
            console.log(error);
            setTimeout(() => {
              setErrors(''); // Reset showErr to false after 200ms
          }, 3000);
          } finally {
            setLoading(false)
          }
        };
    
        fetchData();
        
      }, []);

      useEffect(() => {
        console.log(posts);
      }, [posts]); // UseEffect will be triggered whenever posts state changes

  return (
    <div className='relative w-[90%] h-screen sm:w-[80%] md:w-[40rem] lg:w-[48rem] xl:w-[58rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-wrap gap-[1rem]'>

            {errors && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <button className="absolute right-2 top-0" onClick={()=> {setErrors(null)}}>x</button>
                    {Array.isArray(errors) ? errors.map((error, index) => (
                        <div key={index}>- {error.message}</div>
                    )) : (
                        <div key="api-error">{errors.response.data.error}</div>
                    )}
                </div>
            )}

            {loading && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <div className="custom-loader"></div>
                </div>
            )}

        <a className='btn-primary bg-secondary text-accent outline-accent absolute right-0 mr-[1rem] sm:mr-[2rem] py-[0.25rem]' href="/profile">Profile</a>
        <a className='btn-primary bg-secondary text-accent outline-accent fixed right-0 mr-[1rem] sm:mr-[10%] md:mr-[12%] lg:mr-[18%] bottom-[2rem] rounded-full px-[0.5rem] py-[0.25rem] font-semibold text-[1rem] drop-shadow-lg' href="/createauction">Create Auction</a>
        <h1 className="w-[100%] text-[1.5rem] text-center font-semibold">Feed</h1>
        {posts.map((post, key) => (
            <Cards key={key} details={post} />
      ))}
    
    </div>
  )
}

export default FeedPage