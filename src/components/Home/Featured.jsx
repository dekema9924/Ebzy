import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Featured() {
    const [isfeautured, setFeatured] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios('https://api.escuelajs.co/api/v1/products/?categoryId=2&offset=3&limit=3')
            .then(response => {
                setFeatured(response.data)
                setLoading(false)
            })
    }, [])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
          slidesToSlide: 3 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 3 
        },
        mobile: {
          breakpoint: { max: 764, min: 0 },
          items: 2, 
           slidesToSlide: 1 
        }
      };




    return (
        <>


            {
                !isLoading ? <>
                    <Carousel 
                    responsive={responsive}
                      swipeable={true}
                      itemClass="carousel-item-padding-40-px"
                      partialVisible={false}


                      >
                        {
                            isfeautured.map((feauture) => {
                                return (
                                            <>
                                                <div key={feauture.id} className=' w-[390px] border-2 border-gray-900 m-auto h-[400px] rounded-lg sm:w-[290px] mt-5 hover:scale-105 transition-all delay-100 bg-gray-200'>
                                                    <div className=' flex flex-col jusstify-around h-80'>
                                                        <p className=' border-2 m-5 text-gray-500  text-center w-28 font-thin text0sm rounded-2xl border-gray-400'>Featured</p>
                                                        <img className='  scale-100 h-[260px] m-auto' src={feauture.images[1]} alt="itemimage" />
                                                    </div>
                                                    <div className='border-2 mt-4 flex justify-between'>
                                                        <p className='font-light ml-5'>{feauture.title}</p>
                                                        <p className='text-gray-500 mr-5'> ${feauture.price}.00</p>
                                                    </div>
                                                </div>


                                            </>
                                )
                            })
                        }
                    </Carousel>
                </> : ""
            }

        </>
    )
}

export default Featured