
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { RelatedContext } from '../Context/RelatedContext'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';



function Related() {
    const category_id = useContext(RelatedContext)
    const [isRelated, setRelated] = useState();
    const [isLoading, setLoading] = useState(true)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    useEffect(() => {
        axios(`https://api.escuelajs.co/api/v1/products/?categoryId=${category_id}`)
            .then((response) => {
                setRelated(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className='border-2'>
                <h1 className='text-2xl font-medium text-gray-800  w-48 ml-16 '>Related products</h1>
                {
                    !isLoading ? <>
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            partialVisible={false}>

                            {
                                isRelated.map((products) => {
                                    return (
                                        <>
                                            <Link to={`/product/${products.id}`}>
                                                <div key={products.id} className='w-96 p-3 mt-20 h-[460px] '>
                                                <Link to={`/product/${products.id}`}>
                                                <img className='w-[400px] rounded-2xl h-[400px]' src={products.images[0]} alt="" />

                                                </Link>
                                                    <div className='flex justify-between mt-3'>
                                                        <p className=''>{products.title}</p>
                                                        <p className='font-thin text-gray-700'>$<span>{products.price}</span>.00</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </Carousel>

                    </> : ""
                }
            </div>

        </>
    )
}

export default Related