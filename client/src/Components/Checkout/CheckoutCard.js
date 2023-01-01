import React from 'react'
import './CheckoutCard.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch } from 'react-redux';
import { REMOVE_PRODUCT, INC_AMOUNT, DECR_AMOUNT } from '../../redux/cart/CartTypes';

const CheckoutCard = ({id, title, price, img, amount}) => {
  const dispatch = useDispatch()
  return (
     
          <tbody>
            <tr>
              <td>
                <div className="checkout__img">
                  <img src={img} alt={title} />
                </div>
                <p>{title}</p>
              </td>
              <td>
                <div className="checkout__quantity">
                  <span onClick={()=>{dispatch({type: DECR_AMOUNT, payload: id})}}><RemoveOutlinedIcon/></span>{amount}<span onClick={()=>{dispatch({type: INC_AMOUNT, payload: id})}}><AddOutlinedIcon/></span>
                </div>
              </td>
              <td>{`${price.toFixed(2)} USD`}</td>
              <td><span onClick={()=>dispatch({type: REMOVE_PRODUCT, payload: id})}><DeleteOutlineOutlinedIcon/></span></td>
            </tr>
            <hr></hr>
          </tbody>
       

  )
}

export default CheckoutCard