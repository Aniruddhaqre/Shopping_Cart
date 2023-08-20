import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector ,useDispatch} from "react-redux";
import { toast} from "react-hot-toast"


const Cart = () => {

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart);

  const cart = useSelector((state) => state.cart);

  const increment = (id) => {
    dispatch({
      type : "addToCart",
      payload : {id}
    })
    dispatch({type : "calculatePrice"})
  };
  const decrement = (id) => {
    dispatch({
      type : "decrement",
      payload : {id}
    })
    dispatch({type : "calculatePrice"})
  };
  const deleteHandler = (id) => {
    dispatch({
      type : "delete",
      payload : {id}
    })
    dispatch({type : "calculatePrice"})
    toast.error("Deleted sucessfully")
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              key={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>NO ITEMS YET</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal : ${cart.subTotal}</h2>
        <h2>Shipping : ${cart.shipping}</h2>
        <h2>Tax : ${cart.tax}</h2>
        <h2>Total: ${cart.total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
