import {
        FETCH_SUCCEED,
    CHANGE_CATEGORY } from "./ProductsTypes"

const initialState = {
    products : [],
    category: 6,
}

export const ProductsReducer =(state = initialState, action)=>{
    switch(action.type){
        case FETCH_SUCCEED:            
            return{
                ...state,
                products: action.payload,
            }
        case CHANGE_CATEGORY: 
        return {
            ...state,
            category: action.payload
        }
        default:
            return state
    }
}