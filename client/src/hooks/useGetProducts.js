import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { FETCH_SUCCEED } from '../redux/products/ProductsTypes';

const API_ENDPOINT = 'http://localhost:1337/api/';
const useGetProducts = (category) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const dispatch = useDispatch();

    const fetchData = async(category)=>{
        await axios.get(`${API_ENDPOINT}categories/${category}?populate[products][populate]=*`)
        .then(res=> {
            setIsLoading(false)
            const data = res.data.data.attributes.products.data;
            dispatch({type: FETCH_SUCCEED, payload: data})

        }).catch(error=>{
            const msg = error.message;
            setIsLoading(false)
            setError(msg)
        })

    }

    useEffect(()=>{
        fetchData(category)
    },[category])

  return {
    isLoading, error
  }
}

export default useGetProducts


