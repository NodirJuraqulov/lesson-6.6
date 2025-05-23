import React from 'react'

const Skeleton = () => {
  return (
    <div className='mt-15 w-full'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                Array(8).fill("").map((_, index) => (
                    <div key={index} className='bg-slate-200 rounded-lg p-4 w-full'>
                        <div className='w-full h-80 bg-slate-300 rounded-md mb-2'></div>
                        <div className='w-7/8 h-8 bg-slate-300 animate-pulse rounded-md mb-2'></div>
                        <div className='w-full h-6 bg-slate-300 animate-pulse rounded-md mb-2'></div>
                        <div className='w-3/4 h-10 bg-slate-300 animate-pulse rounded-md mb-2'></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default React.memo(Skeleton)