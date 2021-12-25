import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = (props) => {
  const { _id, place, cost, img } = props.service;

  return (
    <div>
      <div>
        <Col style={{ width: "80%", margin: "0 auto" }}>
          <Card
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <Card.Img variant="top" src={img} style={{ height: "200px" }} />
            <Card.Body className="text-center">
              <Card.Title>
                <FontAwesomeIcon
                  style={{ color: "orange", marginRight: "3%" }}
                  icon={faMapMarker}
                />
                {place}
              </Card.Title>
              <Card.Text>
                <p>Cost:${cost}</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit quos cumque corporis reiciendis molestias voluptates
                  doloremque
                </p>
              </Card.Text>

              <Link to="/revieworder">
                <Button
                  onClick={() => props.handleAddToCart(props.service)}
                  style={{ background: "orange", border: "none" }}
                >
                  Book Now
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
      <div></div>
    </div>
  );
};

export default Service;
