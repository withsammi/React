import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider, } from 'react-router-dom'
import Layout from './Layout'
import Home from '../components/home/home'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import User from '../components/user/user'
import Github,{ gitInfoloader} from '../components/github/github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>} >
      <Route index element ={<Home/>} />
      <Route path='about' element ={<About/>} />
      <Route path='contact' element ={<Contact/>} />
      <Route path= 'user/:userId' element={<User />} />
      <Route 
        loader = {gitInfoloader}
        path = 'github'
        element = {<Github />}
       />

      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
