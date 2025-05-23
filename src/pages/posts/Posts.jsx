import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotFound from '../not-found/NotFound'
import Skeleton from '../skeleton/Skeleton'

const Posts = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios.get('https://dummyjson.com/posts')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (error) {
        return (
            <NotFound/>
        )
    }

  return (
    <div>
        <div className='container mx-auto justify-center flex flex-col items-center'>
            <h2 className='text-4xl font-medium'>Posts</h2>

            {loading && <Skeleton count={8}/>}

            <div className='rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data?.posts?.map((item) => (
                        <div key={item.id} className='bg-gray-200 rounded-lg p-4 w-full'>
                            <h2 className='text-2xl font-medium line-clamp-1 mb-2 overflow-hidden'>{item.title}</h2>
                            <p className='text-lg line-clamp-4 overflow-hidden'>{item.body}</p>

                            <div className='grid grid-cols-3 w-full gap-5 items-start mt-2'>
                                <div>
                                    <h4 className='text-xl my-1 font-medium'>Tags:</h4>
                                    <ul className='ml-5 list-disc'>
                                        <li>{item.tags[0]}</li>
                                        <li>{item.tags[1]}</li>
                                        <li>{item.tags[2]}</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className='text-xl my-1 font-medium'>Reactions:</h4>
                                    <ul className='ml-2'>
                                        <li>Likes: {item.reactions.likes}</li>
                                        <li>Dislikes: {item.reactions.dislikes}</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className='text-xl my-1 font-medium'>Views:</h4>
                                    <ul className='ml-2'>
                                        <li>Views: {item.views}</li>
                                        <li>UserId: {item.userId}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button className='py-3 px-32 text-xl font-medium cursor-pointer rounded-md bg-slate-800 text-white mt-8 hover:bg-slate-900 transition'>See more</button>
        </div>
    </div>
  )
}

export default React.memo(Posts)