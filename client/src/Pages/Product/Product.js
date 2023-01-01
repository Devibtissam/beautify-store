import React from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import useGetProduct from '../../hooks/useGetProduct'
import './Product.scss'
import BlockIcon from '@mui/icons-material/Block';
import { ADD_PRODUCT } from '../../redux/cart/CartTypes'

const LocalUpload = 'http://localhost:1337';


const Product = () => {
  const {article} = useParams();
  const {isLoading, error, product} = useGetProduct(`products/${article}?populate=*`);
  const {id, attributes: item} = product;
  const dispatch = useDispatch();


  const addProduct =()=>{
    const product = {
      id: id,
      title: item.title,
      price: item.price,
      img: `${LocalUpload}${item.image.data.attributes.formats.medium.url}`,
      amount: 1
    }
    dispatch({type: ADD_PRODUCT, payload: product})

  }

  return (
  <main className='container pd-y'>
    { isLoading ? <p>Loading... </p> :
    !isLoading && error ? <p>{error}</p> : 
    <section className="product">
      <div className="product__img">
        <img src={`${LocalUpload}${item.image.data.attributes.formats.medium.url}`} alt="" />
      </div>
      <div className="product__details">
        <h2 className='product__title'>{item.title}</h2>
        <p className='product__price'>{`${item.price.toFixed(2)} USD`}</p>
        <p className='product__color'>Select Color</p>
        <div className="product__colors">
          {
            item.colors ? item.colors.split(',').map(color => <div style={
              {backgroundColor: `${color}`}
            }></div>) : <BlockIcon/>
          }
         
        </div>
        <button type='button' className='secondary-btn product__btn' onClick={()=>addProduct(id)}>add a product</button>
        <div className="product__desc">
          <p>product details</p>
          <p>{item.description}</p>
        </div>
      </div>
    </section> 
}
 </main>
  )
}

export default Product