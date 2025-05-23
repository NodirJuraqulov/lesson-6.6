import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Tizimga kirish</h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Parol
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Kirish
          </button>
        </form>

        {/* Pastda */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Hisobingiz yo‘qmi?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Ro‘yxatdan o‘tish
          </a>
        </p>
      </div>

      <div className='flex gap-8 mt-4'>
        <button onClick={() => navigate("/")} className='py-2 px-14 cursor-pointer rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'>Go home</button>
        <button onClick={() => navigate(-1)} className='py-2 px-14 cursor-pointer rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'>Go back</button>
      </div>
    </div>
  )
}

export default React.memo(Login)