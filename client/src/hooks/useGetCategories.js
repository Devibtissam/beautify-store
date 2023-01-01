import axios from 'axios';
import React, {useEffect, useState} from 'react'
const API_ENDPOINT = 'http://localhost:1337/api/';
const useGetCategories = (path) => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    const  fetchCategories = async(path)=>{
        await axios.get(`${API_ENDPOINT}${path}`)
        .then(res => {
            const data = res.data.data;
            setCategories(data)
        })
        .catch(error => {
            const msg = error.message;
            setError(msg)
        })
    }

    useEffect(() => {
      fetchCategories(path)
    
      
    }, [])
    
  return {
    error, categories
  }
}

export default useGetCategories