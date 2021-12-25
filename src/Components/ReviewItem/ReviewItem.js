import React from "react";
import { Container } from "react-bootstrap";

const ReviewItem = (props) => {
  const { _id, img, service, cost, quantity } = props.service;
  const { handleRemove } = props;

  // const totalReducer = (previous, product) => previous + product.price;
  // const total = cart.reduce(totalReducer, 0);

  return (
    <Container className="mb-5">
      <div
        className="product row "
        style={{ boxShadow: " rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
      >
        <div className="product-image col-lg-4 col-md-4 ">
          <img
            className="img-fluid "
            style={{ width: "60%" }}
            src={img}
            alt=""
          />
        </div>
        <div className="product-text  col-lg-4 col-md-4 ">
          <h4 className="product-name">{service}</h4>
          <p>Price:{cost}</p>
          <p>Quantity:{quantity}</p>
          <button
            className="btn-regular"
            onClick={() => handleRemove(_id)}
            style={{ background: "black", color: "white", padding: "4px 13px" }}
          >
            Remove
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ReviewItem;
