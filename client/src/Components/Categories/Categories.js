import React from 'react'
import { useDispatch } from 'react-redux';
import useGetCategories from '../../hooks/useGetCategories'
import { CHANGE_CATEGORY } from '../../redux/products/ProductsTypes';
import './Categories.scss'

const Categories = () => {
  const {error, categories} = useGetCategories('categories?fields=name');
  const dispatch = useDispatch()
  const categoryValue = (e)=>{
    dispatch({type: CHANGE_CATEGORY, payload: e.target.value})
  }
  return (
    <div className="categories">
        <label htmlFor="CategoryFilter"
        className='visually-hidden'>Filter by Category</label>
        <select name="CategoryFilter" id="CategoryFilter" onChange={(e)=>categoryValue(e)}>
            <option value='categories' selected disabled>Categories</option>
            {!error ? categories.map(category => <option value={category.id} key={category.id}>{category.attributes.name.toUpperCase()}</option>) : <option>no categories available</option>}
        </select>

    </div>
  )
}

export default Categories