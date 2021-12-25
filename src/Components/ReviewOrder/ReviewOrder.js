import React from "react";
import { useHistory } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useServices from "../../Hooks/useServices";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

import { Button, Container } from "react-bootstrap";

const ReviewOrder = () => {
  const [services] = useServices([]);
  const [cart, setCart] = useCart(services);
  const handleRemove = (_id) => {
    const newCart = cart.filter((product) => product._id !== _id);
    setCart(newCart);
    removeFromDb(_id);
  };
  const history = useHistory();
  const handleProceedToShipping = () => {
    history.push("/confirm");
    setCart([]);
    clearTheCart();
  };

  let totalQuantity = 0;
  let total = 0;
  for (const service of cart) {
    if (!service.quantity) {
      service.quantity = 1;
    }
    total = total + service.cost * service.quantity;
    totalQuantity = totalQuantity + service.quantity;
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <h3 className="text-center">Shopping Bag</h3>
      <Container>
        <div className="order row mb-5">
          <div className="product-order col-lg-8">
            <h3 style={{ borderBottom: "3px solid black" }}>
              Items Ordered: {totalQuantity}
            </h3>
            {cart.map((service) => (
              <ReviewItem
                service={service}
                _id={service._id}
                handleRemove={handleRemove}
              ></ReviewItem>
            ))}
          </div>
          <div className="cart-order col-lg-4 ">
            <Cart cart={cart}></Cart>
            <button
              className="btn-regular"
              onClick={handleProceedToShipping}
              style={{
                width: "100%",
                background: "black",
                color: "white",
                padding: "6px 0",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewOrder;
