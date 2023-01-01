import { combineReducers } from "redux";
import { ProductsReducer } from "./redux/products/ProductsReducer";
import { CartReducer } from "./redux/cart/CartReducer";
const RootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
})

export default RootReducer;