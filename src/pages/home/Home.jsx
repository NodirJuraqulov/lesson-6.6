import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NotFound from '../not-found/NotFound'
import Skeleton from '../skeleton/Skeleton'

const Home = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios.get('https://dummyjson.com/products')
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
            <h1 className='text-4xl font-medium'>Products</h1>

            {loading && <Skeleton count={8}/>}

            <div className='rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data?.products?.map((item) => (
                        <div key={item.id} className='bg-slate-800 text-white rounded-lg p-4 w-full'>
                            <div className='relative'>
                                <img
                                  loading='lazy'
                                  src={item.images[0]}
                                  alt={item.title}
                                  className="w-full object-cover bg-white rounded-md"
                                />
                                <p className='absolute top-1 left-1 p-1 rounded-md font-medium bg-slate-800'>{item.category}</p>
                                <p className='absolute top-1 right-1 p-1 rounded-md font-medium bg-red-800'>{item.rating}</p>
                            </div>
                            <h2 className='text-2xl truncate mt-2 font-medium'>{item.title}</h2>
                            <p className='text-md mb-2 text-slate-400'>{item.brand}</p>
                            <p className='line-clamp-2 mb-2'>{item.description}</p>
                            <div className='flex gap-6 items-center'>
                                <p className='text-xl font-bold'>${item.price}</p>
                                <p className='text-md p-[2px] rounded-md bg-red-800 opacity-90 font-bold'>-{item.discountPercentage}%</p>
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

export default React.memo(Home)