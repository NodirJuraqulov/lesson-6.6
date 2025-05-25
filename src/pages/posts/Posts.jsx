import React, { useEffect, useState } from 'react'
import NotFound from '../not-found/NotFound'
import Skeleton from '../skeleton/Skeleton'
import { api } from '../../api'
import Postss from '../../components/postss/Postss'

const Posts = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        api
            .get('/posts')
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

           <Postss data={data?.posts}/>

            <button className='py-3 px-32 text-xl font-medium cursor-pointer rounded-md bg-slate-800 text-white mt-8 hover:bg-slate-900 transition'>See more</button>
        </div>
    </div>
  )
}

export default React.memo(Posts)