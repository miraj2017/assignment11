import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const Advantages = () => {
  return (
    <div style={{ padding: "150px 0px" }}>
      <Container>
        <h4 className="text-center text-muted" style={{ marginBottom: "60px" }}>
          Our Advantages
        </h4>
        <CardGroup>
          <Card style={{ border: "none" }}>
            <Card.Body className="text-center">
              <Card.Title>Reasonable Cost</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: "none" }}>
            <Card.Body className="text-center">
              <Card.Title>Comfortness</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: "none" }}>
            <Card.Body className="text-center">
              <Card.Title>Available Scedule</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Advantages;
