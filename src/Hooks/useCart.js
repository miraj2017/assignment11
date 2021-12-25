import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useServices from "./useServices";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [services] = useServices();

  useEffect(() => {
    if (services.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const _id in savedCart) {
        const addedService = services.find((service) => service._id === _id);
        if (addedService) {
          const quantity = savedCart[_id];
          addedService.quantity = quantity;
          storedCart.push(addedService);
        }
      }
      setCart(storedCart);
    }
  }, [services]);
  return [cart, setCart];
};

export default useCart;
