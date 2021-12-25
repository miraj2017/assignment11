import React from "react";
import useCart from "../../Hooks/useCart";
import useServices from "../../Hooks/useServices";

const Cart = () => {
  const [services] = useServices();
  const [cart] = useCart(services);

  // const totalReducer = (previous, product) => previous + product.price;
  // const total = cart.reduce(totalReducer, 0);
  let totalQuantity = 0;
  let total = 0;
  for (const service of cart) {
    if (!service.quantity) {
      service.quantity = 1;
    }
    total = total + service.cost * service.quantity;
    totalQuantity = totalQuantity + service.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div style={{ marginTop: "100px" }}>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {totalQuantity}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
