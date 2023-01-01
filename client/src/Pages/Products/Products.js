import React from 'react'
import { useSelector } from 'react-redux';
import Categories from '../../Components/Categories/Categories';
import ProductCard from '../../Components/ProductCard';
import useGetProducts from '../../hooks/useGetProducts';
import './Products.scss'

const Products = () => {
  const category = useSelector(state => state.products.category);
  const {isLoading, error} = useGetProducts(category)
  const products = useSelector(state => state.products.products)

  return (
    <main className='container'>
      <section className="search pd-y">
      <Categories/>
       </section>
      <section className='products'>

        { isLoading ? 
        
         <p>Loading.... </p> :

         !isLoading && error ? 

         <p>{error}</p> : 

        products.map(product => {
          return (<ProductCard key={product.id} {...product}/>)
        })}
          
       
       </section> 
    </main>
  )
}

export default Products