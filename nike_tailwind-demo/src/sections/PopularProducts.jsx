import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../Components/PopularProductCard'

function PopularProducts() {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold'><span className='text-red-400'>Popular</span> Products</h2>
            <p className='lg:max-w-lg mt-2 text-slate-500'>Experience top-notch quality and style with our sought-after selections.Discovera world of compforts,design and value</p>
        </div>

        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {products.map((product,index)=>(
                <PopularProductCard key={index} {...product}/>
            ))}
        </div>
    </section>
  )
}

export default PopularProducts
