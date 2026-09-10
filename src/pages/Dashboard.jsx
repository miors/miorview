import { Container } from "react-bootstrap";
import ItemCard from "../components/ItemCard";

export default function Dashboard({ products }) {
  return (
    <Container>
      <h1 className="my-3">Welcome to Dashboard</h1>
      {products.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Container>
  );
}
