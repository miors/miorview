import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
} from "react-bootstrap";

export default function Camera() {
  return (
    <Container>
      <h1 className="my-3">Camera</h1>
      <Card>
        <CardTitle>Camera 1</CardTitle>
        <CardText>Monitoring...</CardText>
        <CardSubtitle>Status: Offline</CardSubtitle>
      </Card>
    </Container>
  );
}
