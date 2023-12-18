import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/app' element={
        <ProtectedRoutes>
          <AppLayout />
        </ProtectedRoutes>
      }>

      </Route>
    </Routes>
  )
}

export default App
