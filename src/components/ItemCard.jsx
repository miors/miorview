import { Card, Button } from "react-bootstrap";

function ItemCard({ item }) {
  return (
    <Card>
      <img src={item.image} alt={item.name} width="150" height="150" />

      <Card.Body>
        <p>{item.category}</p>
        <Card.Title>{item.name}</Card.Title>
        <p>{item.message}</p>
        <p>{item.status}</p>

        <Button>Turn on/off</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
