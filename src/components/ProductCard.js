import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import { useState, useEffect } from 'react';
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);
  const {id, name, price, image} = product;
  
  useEffect(() => {
    const productInCart = cart.find(item => item.id === id);

    setIsInCart(productInCart);
  }, [cart, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        { isInCart ? <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button> : <button onClick={() => dispatch(add(product))}>Add To Cart</button>}
      </div>
    </div>
  )
}