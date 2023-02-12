import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-preview.scss'

const CategoryPreview = ({title, products}) => {
    const [randomProductIdx, setRandomProductIdx] = useState(new Set())

    useEffect(()=>{
        listRandomProductsIdx(products.length)
    },[] )

    const listRandomProductsIdx = productLength =>{
        const randomProducts = new Set()
        
        while (randomProducts.size < 4){
            randomProducts.add(Math.floor(Math.random() * productLength))
        }
        setRandomProductIdx(randomProducts)
    }
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {  products.filter((_, idx)=> randomProductIdx.has(idx))
                    .map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}


export default CategoryPreview