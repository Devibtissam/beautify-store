import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_ENDPOINT = 'http://localhost:1337/api/';
const useGetProduct = (path) => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchProduct =async(path)=>{
        // setIsLoading(true)
        await axios.get(`${API_ENDPOINT}${path}`)
        .then(res => {
            const data = res.data.data;
            setProduct(data)
            setIsLoading(false)
        }).catch(error => {
            const msg = error.message;
            setError(msg)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        fetchProduct(path)
    },[path])
  return {
    isLoading,
    product,
    error
  }
}

export default useGetProduct