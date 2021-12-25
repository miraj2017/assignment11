import React from "react";
import { Row } from "react-bootstrap";
import useCart from "../../Hooks/useCart";
import useServices from "../../Hooks/useServices";
import { addToDb } from "../../utilities/fakedb";

import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  const [cart, setCart] = useCart(services);

  const handleAddToCart = (service) => {
    const exists = cart.find((p) => p._id === service._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((p) => p._id !== service._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, service];
    } else {
      service.quantity = 1;
      newCart = [...cart, service];
    }

    setCart(newCart);
    // save to local storage (for now)
    addToDb(service._id);
  };

  return (
    <div>
      <h1 className="text-center p-5">
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
            marginTop: "0px",
            paddingTop: "0px",
          }}
        >
          S
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          E
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          R
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          V
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          I
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          C
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          E
        </span>
        <span
          style={{
            background: "#f6e58d",
            marginLeft: "10px",
            padding: "0px 14px",
            color: "orange",
          }}
        >
          S
        </span>
      </h1>
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {services.map((p) => (
          <Service
            service={p}
            key={p._id}
            handleAddToCart={handleAddToCart}
          ></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
