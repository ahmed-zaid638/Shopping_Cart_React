import { Col, Row, Container } from "react-bootstrap";
import { StoreItem } from "../Components/StoreItem";
import items from "../data/data.json";

export function Store() {
  return (
    <>
      
      <Container>
        <Row><h1>Store</h1></Row>
        <Row  className ="gy-4  justify-content-between"> 
        {items.map((item) => (
          <Col key={item.id} lg={4} md ={6}  >
            <StoreItem {...item} />
          </Col>
        ))}
        </Row>
      </Container>
      ;
    </>
  );
}

