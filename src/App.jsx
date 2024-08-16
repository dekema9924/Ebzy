import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Allproducts from './components/pages/Allproducts'
import About from './components/pages/About'
import Home from './components/Home/Home'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Electronics from './components/Categories/Electronics'
import Shoes from './components/Categories/Shoes'
import Furniture from './components/Categories/Furniture'
import Footer from './components/Footer'


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
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/shoes' element={<Shoes/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
      </Routes>
        </div>
        <Footer/>
    </>
  )
}

export default App
