import React from "react";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { useHistory } from "react-router-dom";
import useServices from "../../Hooks/useServices";

const Header = () => {
  const [services] = useServices();
  const history = useHistory();
  const [cart] = useCart(services);
  const { user, logout } = useAuth();

  // const totalReducer = (previous, product) => previous + product.price;
  // const total = cart.reduce(totalReducer, 0);
  let totalQuantity = 0;

  for (const service of cart) {
    if (!service.quantity) {
      service.quantity = 1;
    }

    totalQuantity = totalQuantity + service?.quantity;
  }
  const CartToOrder = () => {
    history.push("/revieworder");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
        <Container>
          <Navbar.Brand href="#home">Travel Agency</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/addservice">
                Add a Service
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                cart
              </Nav.Link>
              {user.displayName && (
                <Nav.Link as={Link} to="/revieworder">
                  Your Order
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button
                style={{ background: "orange", border: "none" }}
                onClick={CartToOrder}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalQuantity}
              </Button>
            </Navbar.Text>

            <Navbar.Text>
              {user.displayName ? (
                user.displayName && (
                  <button onClick={logout} style={{ border: "none" }}>
                    Sign Out
                  </button>
                )
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Navbar.Text>

            <Navbar.Text style={{ marginLeft: "10px" }}>
              {user.displayName && (
                <img
                  width="30px"
                  src={user.photoURL}
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
