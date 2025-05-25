import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import NotFound from './pages/not-found/NotFound'
import Users from './pages/users/Users'
import Posts from './pages/posts/Posts'
import ProductDetail from './pages/product-detail/ProductDetail'
import RecipesDetail from './pages/recipes-detail/RecipesDetail'
import Dashboard from './pages/dashboard/Dashboard'
import BoshSahifa from './pages/dashboard/bosh-sahifa/BoshSahifa'
import Tolovlarim from './pages/dashboard/tolovlarim/Tolovlarim'
import Guruhlarim from './pages/dashboard/guruhlarim/Guruhlarim'
import Korsatkichlarim from './pages/dashboard/korsatkichlarim/Korsatkichlarim'
import Reyting from './pages/dashboard/reyting/Reyting'
import Dokon from './pages/dashboard/dokon/dokon'
import Qoshimcha from './pages/dashboard/qoshimcha/Qoshimcha'
import Sozlamalar from './pages/dashboard/sozlamalar/Sozlamalar'
import Tolangan from './pages/dashboard/tolovlarim/Tolangan'
import Tolanmagan from './pages/dashboard/tolovlarim/Tolanmagan'
import Faol from './pages/dashboard/guruhlarim/Faol'
import Tugagan from './pages/dashboard/guruhlarim/Tugagan'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipess/:id" element={<RecipesDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<BoshSahifa/>}/>
          <Route path='tolovlarim' element={<Tolovlarim/>}>
            <Route path='' element={<Tolangan/>}/>
            <Route path='tolanmagan' element={<Tolanmagan/>}/>
          </Route>
          <Route path='guruhlarim' element={<Guruhlarim/>}>
            <Route path='' element={<Faol/>}/>
            <Route path='tugagan' element={<Tugagan/>}/>
          </Route>
          <Route path='korsatkichlarim' element={<Korsatkichlarim/>}/>
          <Route path='reyting' element={<Reyting/>}/>
          <Route path='dokon' element={<Dokon/>}/>
          <Route path='qoshimcha' element={<Qoshimcha/>}/>
          <Route path='sozlamalar' element={<Sozlamalar/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App