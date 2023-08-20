import React from "react";
import ProductCard from "./ProductCard ";
import { toast } from "react-hot-toast";
import {useDispatch} from "react-redux"

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: "12000",
      imgSrc: "https://rukminim1.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90",
      id: "asdhoidsoahdioahdioadsdj",
    },
    {
      name: "Shoes",
      price: "490",
      imgSrc: "https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)",
      id: "asdhoidsfsdofhewufeeiowh",
    },
  ];

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({
      type : "addToCart",
      payload : options
    })
    dispatch({type : "calculatePrice"})
    toast.success("Added To Cart")
  }

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
