import { Card, Placeholder } from "react-bootstrap";

function LoadingCard() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="/placeholder.png" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={6} />
          <Placeholder xs={7} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}

export default LoadingCard;
