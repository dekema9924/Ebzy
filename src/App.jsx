import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/Home/Home'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Allproducts from './components/categories/Allproducts'
import Product from './components/Product'
import Newsletter from './components/Home/Newsletter'


function App() {
  return (
    <>
      <Header/>
        <div className=' p-5'>
        <Routes>
          <Route path='/allproducts' element={<Allproducts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          

      </Routes>
        </div>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default App
