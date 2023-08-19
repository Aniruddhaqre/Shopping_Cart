import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem 
          imgSrc={"https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"}
          name={"Mac Book"}
          price={23212}
          qty={1}
          id={"dsaodhsaodsdassa"}
        />
        <CartItem 
          imgSrc={"https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"}
          name={"Mac Book"}
          price={23212}
          qty={1}
          id={"dsaodhsaodsdassa"}
        />
        <CartItem 
          imgSrc={"https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"}
          name={"Mac Book"}
          price={23212}
          qty={1}
          id={"dsaodhsaodsdassa"}
        />
        <CartItem 
          imgSrc={"https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"}
          name={"Mac Book"}
          price={23212}
          qty={1}
          id={"dsaodhsaodsdassa"}
        />
        <CartItem 
          imgSrc={"https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"}
          name={"Mac Book"}
          price={23212}
          qty={1}
          id={"dsaodhsaodsdassa"}
        />
        <CartItem 
          imgSrc={"https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"}
          name={"Mac Book"}
          price={23212}
          qty={1}
          id={"dsaodhsaodsdassa"}
        />
      </main>
      <aside>
        <h2>Subtotal : ${2000}</h2>
        <h2>Shipping : ${200}</h2>
        <h2>Tax : ${20}</h2>
        <h2>Total: ${1220}</h2>
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
