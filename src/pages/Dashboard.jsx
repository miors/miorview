import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  console.log(authContext.products);

  const totalFeeds = authContext.products?.length || 0;
  const activeFeeds =
    authContext.products?.filter(
      (p) =>
        p.status?.toLowerCase() === "online" ||
        p.status?.toLowerCase() === "active",
    ).length || 0;

  return (
    <Container className="py-2">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center border-bottom pb-3 mb-4 gap-2">
        <div>
          <h2
            className="fw-bold mb-1 text-dark text-uppercase font-monospace d-flex align-items-center gap-2"
            style={{ fontSize: "1.15rem", letterSpacing: "1.5px" }}
          >
            <span
              className="position-relative d-inline-block"
              style={{ width: "8px", height: "8px" }}
            >
              <span className="position-absolute w-100 h-100 bg-success rounded-circle animate-ping opacity-75"></span>
              <span className="position-absolute w-100 h-100 bg-success rounded-circle"></span>
            </span>
            Watching Over Your World
          </h2>
          <p
            className="text-secondary mb-0 font-monospace small"
            style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}
          >
            SECURE MATRIX CONNECTED // ENCRYPTED LIVE FEED
          </p>
        </div>

        <div className="d-flex gap-3 font-monospace bg-light border rounded px-3 py-1.5">
          <div style={{ fontSize: "11px" }}>
            <span className="text-secondary text-uppercaser">Active: </span>
            <strong className="text-success">{activeFeeds}</strong>
            <span className="text-muted">/{totalFeeds}</span>
          </div>
          <div className="vr text-secondary"></div>
          <div style={{ fontSize: "11px" }}>
            <span className="text-secondary text-uppercase">Network:</span>{" "}
            <strong className="text-primary">SECURE</strong>
          </div>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {authContext.products.map((item) => (
          <Col key={item.id} className="d-flex justify-content-center">
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
