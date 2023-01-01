import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INC_AMOUNT,
    DECR_AMOUNT,
    GET_TOTAL
} from './CartTypes'

const initialState = {
    products: [],
    amount: 0,
    total: 0
}

export const CartReducer =(state= initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT: 
        // check if not already exists in our bag shopping
        if(state.products.length > 0){
        let found = false;
        let tempProducts = state.products.map(product => {
            if(product.id === action.payload.id){
                found = true;
                return {...product, amount: product.amount + 1}
            }
            return product
        })
        if(!found){
            return {
                ...state,
                products: [...state.products, action.payload],
                amount: state.amount + 1
            }
        }else{
            return {
                ...state,
                products: tempProducts,
                amount: state.amount + 1
            }
        }
        }

        return {
            ...state,
            products: [...state.products, action.payload],
            amount: state.amount + 1
        }

        case REMOVE_PRODUCT:
            let filteredProducts = state.products.filter(product=> product.id !== action.payload);
            const amount = state.products.filter(product=> product.id === action.payload).map(product=> product.amount)
            return {
                ...state,
                products: filteredProducts,
                amount: state.amount - amount
            }
        case INC_AMOUNT:
            let incProducts = state.products.map(product=> {
                if(product.id === action.payload){
                    return {...product, amount: product.amount + 1}
                }
                return product

            } )
            return {
                ...state,
                products: incProducts,
                amount: state.amount + 1
            }
        case DECR_AMOUNT:
          const decProducts = state.products.filter(product=> product.amount > 1).map(product=> {
            if(product.id === action.payload){
                return {...product, amount: product.amount - 1}
            }
            return product
          })

          return {
            ...state,
            products: decProducts,
            amount: state.amount - 1
          }

          case GET_TOTAL:
            const totalProducts = state.products.reduce((total, product) =>{
                total += product.amount * product.price
                return total
            },0)

            return {
                ...state,
                total: totalProducts
            }
    

        default: 
         return state

    }
}