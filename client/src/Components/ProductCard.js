import React from 'react'
import {Link} from 'react-router-dom'
import './ProductCard.scss'

const LocalUpload = 'http://localhost:1337';

const ProductCard = ({id, attributes}) => {
const {title, price, image} = attributes;
  return (
     <Link to={`/product/${id}`}>
    <article className='article'>
      <div className='article__img'>
      <img src={`${LocalUpload}${image.data.attributes.formats.medium.url}`} alt="" />
      </div>
      <h2 className='article__title'>
{title}</h2>
<p className='article__price'>{`${price.toFixed(2)} USD`}</p>
    </article>
    </Link>
  )
}

export default ProductCard