import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from './Search';


function Allproducts() {

  const [isLoading, setLoading] = useState(true);
  const [allproducts, setallproducts] = useState(true);
  const [category, setCategory] = useState("All products")
  const [isclicked, setClicked] = useState(false)

  const Handlecategory = (e)=>{
    setCategory(e.target.value)
    console.log(e.target.value)
  }

  const HandleClick= ()=>{
      setClicked((prev)=>!prev)
  }

  useEffect(() => {
     
      if(category === "Shoes"){
        console.log("shoes")
        axios('https://api.escuelajs.co/api/v1/products/?categoryId=4')
          .then((response) => {
            console.log(response.data)
            setallproducts(response.data)
            setLoading(false)
          })

      } 
      else if(category === "Furniture"){
        console.log("furniture")
        axios('https://api.escuelajs.co/api/v1/products/?categoryId=3')
        .then((response) => {
          console.log(response.data)
          setallproducts(response.data)
          setLoading(false)
        })
      } 
      else if(category === "Electronics"){
        axios('https://api.escuelajs.co/api/v1/products/?categoryId=2')
        .then((response) => {
          console.log(response.data)
          setallproducts(response.data)
          setLoading(false)
        })
      }else{
        axios('https://api.escuelajs.co/api/v1/products?offset=23&limit=20')
          .then((response) => {
            console.log(response.data)
            setallproducts(response.data)
            setLoading(false)
          })
      }
      window.scrollTo(0, 0);

     
      
      
   
  }, [category])


  return (
    <>
      <h1 className='font-bold text-2xl'>Shop</h1>
      <p className='font-thin  w-80 my-3'>Check out our full collection of products tailored to your needs </p>
      <form className='flex flex-wrap gap-3'>
        <SearchIcon  className='cursor-pointer' onClick={HandleClick}/>
        {
          isclicked ? <Search isclicked={isclicked} /> : ""
        }
        <input type='text' readonly='readonly' value={category}  className='border-2 outline-none cursor-default  bg-black text-white rounded-2xl px-4  font-thin'/>
        <input onClick={Handlecategory} type='text' readonly='readonly' value="Electronics" className='border-2 outline-none cursor-default border-gray-300 rounded-2xl px-4  font-thin'/>
        <input onClick={Handlecategory} type='text' readonly='readonly' value="Shoes" className='border-2 outline-none border-gray-300 cursor-default rounded-2xl px-4 font-thin'/>
        <input onClick={Handlecategory} type='text' readonly='readonly' value="Furniture" className='border-2 outline-none border-gray-300 cursor-default rounded-2xl px-4 font-thin'/>
        <input onClick={Handlecategory} type='text'  readonly='readonly' value="All Products" className='border-2 outline-none border-gray-300 cursor-default rounded-2xl px-4 font-thin'/>
      </form>

      <div className='flex flex-wrap justify-center gap-3'>
        {
          !isLoading ? <>
            {
              allproducts.map((products) => {
                return (
                  <>
                    <Link to={`/product/${products.id}`}>
                      <div className='w-96 p-3 mt-20 h-[460px] '>
                        <img className='w-[400px] rounded-2xl h-[400px]' src={products.images[0]} alt="" />
                        <div className='flex justify-between mt-3'>
                          <p className=' '>{products.title}</p>
                          <p className='font-thin text-gray-700'>$<span>{products.price}</span>.00</p>
                        </div>
                      </div>
                    </Link>

                  </>
                )
              })
            }
          </> : "...LOADING"
        }
      </div>

    </>
  )
}


export default Allproducts



// if(category === "All products"){
//   axios('https://api.escuelajs.co/api/v1/products')
//   .then((response) => {
//     console.log(response.data)
//     setallproducts(response.data)
//     setLoading(false)
//   })
// }
// if(category === 'Shoes'){
//   axios('https://api.escuelajs.co/api/v1/products/?categoryId=4')
//   .then((response) => {
//     console.log(response.data)
//     setallproducts(response.data)
//     setLoading(false)
//   })
// }