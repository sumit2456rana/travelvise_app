import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import ProtectedRoutes from './pages/ProtectedRoutes'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/login' element={<Login />} />
      <Route path='app' element={
        <ProtectedRoutes>
          <AppLayout />
        </ProtectedRoutes>
      }>
        <Route path='/app' element={<Navigate replace to="cities" />} />
        <Route path='cities' element={<CityList />} />
        <Route path='countries' element={<CountryList />} />
        <Route path='cities/:id' element={<City />} />
        <Route path='form' element={<Form />} />
      </Route>  
    </Routes>
  )
}

export default App
