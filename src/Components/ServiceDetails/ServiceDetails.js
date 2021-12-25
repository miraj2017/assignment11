// import React, { useEffect, useState } from "react";
// import { Button, Card, Col, Row } from "react-bootstrap";
// // import { Button } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";

// const ServiceDetails = () => {
//   const { serviceId } = useParams();
//   const [servicedetails, setServicedetails] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/services/${serviceId}`)
//       .then((res) => res.json())
//       .then((data) => setServicedetails(data));
//   }, []);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginBottom: "100px",
//         marginTop: "100px",
//       }}
//     >
//       <div>
//         <Row xs={1} md={3} className="g-4">
//           {servicedetails.details?.map((m2) => (
//             <Col>
//               <Card>
//                 <Card.Img variant="top" src={m2.img} />
//                 <Card.Body>
//                   <Card.Title>{m2.subplace}</Card.Title>
//                   <Card.Text>
//                     <p>{m2.price}</p>
//                     <p>{m2.time}</p>
//                   </Card.Text>
//                   <Link to="/seedetails">
//                     <Button>See Details</Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;

// // onClick={() => props.handleAddtoCart(service)}
