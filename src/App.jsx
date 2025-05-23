import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import NotFound from './pages/not-found/NotFound'
import Users from './pages/users/Users'
import Posts from './pages/posts/Posts'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App