import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutCard from '../../Components/Checkout/CheckoutCard'
import { GET_TOTAL } from '../../redux/cart/CartTypes';
const Checkout = () => {
  const products = useSelector(state=> state.cart.products);
  const total = useSelector(state=> state.cart.total)
  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch({type: GET_TOTAL})
  })
  return (
     <main className='container pd-y'>
      <h1>we're glad you're here!</h1>
       <section className='checkout'>
        <table>
          <thead>
            <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
            </tr>
          </thead>
      {
        products.length ? 
        products.map(product=> <CheckoutCard key={product.id} {...product}/>)
        : 
        <tbody>
          <tr>
            <td className='checkout__alert'>your Bag is emty. Please add an item.</td>
          </tr>
        </tbody>  
      }
      <tfoot>
        <tr>
          <td colSpan={3}>TOTAL:</td>
          <td>{total.toFixed(2)} USD</td>
        </tr>
      </tfoot>
      </table>
    
      </section>
    </main>
  )

}

export default Checkout