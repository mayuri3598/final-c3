import React,{ useContext} from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/CartContext";


const Product = ({item}) => {
console.log(item);
const {Addtocart} = useContext(CartContext)
const [ state ,dispatch] = useContext(AuthContext);

  
  return (

    <div data-cy={`product-${item.id}`}>


      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => dispatch({type: "inc"})}>+</button>
        <span data-cy="product-count">
          {state.counter}
        </span>


        <button data-cy="product-decrement-cart-item-count-button" onClick={() => dispatch({type: "dec"})}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={() => Addtocart()}>Remove From Cart</button>
      
      
      </div>
    </div>
  )
};

export default Product;
