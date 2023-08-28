import React from "react";

const Home = (props) => {
  console.warn("props", props);

  return (
    <div>
      <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wraper item">
          <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/09/14/Photos/Processed/iPhoneXsmartphones-kIQE--621x414@LiveMint.jpg"></img>
        </div>
        <div className="text-wraper item">
          <span>I-phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wraper item">
          <button
            onClick={() =>
              props.AddToCartHandler({ price: 1000, name: "I phone 11" })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
