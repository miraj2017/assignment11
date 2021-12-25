import React from "react";
import "./Banner.css";

import img from "../../images/istockphoto-1277089215-170667a.jpg";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <div className="banner row" style={{ marginTop: "100px" }}>
        <div className="banner-left col-lg-6 col-md-6 col-sm-12 col-12">
          <h4>Do you want to Travel the World?</h4>
          <Link to="./services">
            <Button style={{ backgroundColor: "orange", border: "none" }}>
              Get Travel List
            </Button>
          </Link>
        </div>
        <div className="banner-right col-lg-6 col-md-6 col-sm-12 col-12">
          <img className="img-fluid text-center" src={img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
