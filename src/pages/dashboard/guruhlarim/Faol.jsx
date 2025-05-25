import React from 'react'

const Faol = () => {
  return (
    <div>
        <table className='w-full text-center bg-gray-100 border-collapse shadow border border-gray-300'>
            <thead className='border-b border-gray-400 h-16 hover:bg-gray-200'>
                <tr>
                    <th>#</th>
                    <th className='w-3/7 text-start pl-15'>Guruh nomi</th>
                    <th className='text-start'>Yo'nalishi</th>
                    <th className='text-start'>O'qituvchi</th>
                    <th className='text-start'>Boshlash vaqti</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b border-gray-400 h-12 cursor-pointer hover:bg-gray-200'>
                    <td className='text-start pl-4'>1</td>
                    <td className='text-start pl-15'>Web dasturlash</td>
                    <td className='text-start'>Frontend</td>
                    <td className='text-start'>Aliyev Ali</td>
                    <td className='text-start'>10:00</td>
                </tr>
                <tr className='border-b border-gray-400 h-12 cursor-pointer hover:bg-gray-200'>
                    <td className='text-start pl-4'>2</td>
                    <td className='text-start pl-15'>Mobil dasturlash</td>
                    <td className='text-start'>Android</td>
                    <td className='text-start'>Valiyev Vali</td>
                    <td className='text-start'>11:00</td>
                </tr>
                <tr className='border-b border-gray-400 h-12 cursor-pointer hover:bg-gray-200'>
                    <td className='text-start pl-4'>3</td>
                    <td className='text-start pl-15'>Ma'lumotlar bazasi</td>
                    <td className='text-start'>SQL</td>
                    <td className='text-start'>Saidov Said</td>
                    <td className='text-start'>12:00</td>
                </tr>
            </tbody>    
        </table>
    </div>
  )
}

export default Faol