import { Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemCard({ item }) {
  // Determine status color theme
  const isOnline =
    item.status?.toLowerCase() === "online" ||
    item.status?.toLowerCase() === "active";
  const statusVariant = isOnline ? "success" : "danger";

  return (
    <Card
      className="shadow-sm border-light-subtle bg-light text-dark overflow-hidden p-3"
      style={{ maxWidth: "480px" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column gap-1 text-start flex-grow-1 min-w-0 pe-2">
          <div className="d-flex align-items-center gap-2 mb-1">
            <Card.Title className="fs-6 fw-bold mb-0 text-dark">
              {item.name}
            </Card.Title>
          </div>

          <div className="d-flex gap-1.5 align-items-center flex-wrap mb-1">
            <Badge
              bg="secondary"
              className="text-uppercase px-2 py-1 text-white"
              style={{ fontSize: "10px" }}
            >
              {item.category}
            </Badge>
            <Badge
              bg={statusVariant}
              className="d-flex align-items-center gap-1 text-uppercase px-2 py-1"
              style={{ fontSize: "10px" }}
            >
              <span
                className="spinner-grow bg-white d-inline-block"
                style={{ width: "6px", height: "6px" }}
                role="status"
              ></span>
              {item.status}
            </Badge>
          </div>

          <Card.Text
            className="text-secondary mb-2"
            style={{ fontSize: "0.75rem", maxWidth: "240px" }}
          >
            {item.message || "System scanning... No anomalies detected."}
          </Card.Text>

          <div className="d-flex align-items-center gap-2 mt-1">
            <Button
              variant={isOnline ? "outline-danger" : "success"}
              className="fw-semibold px-3 py-1 btn-sm"
              style={{ fontSize: "0.75rem" }}
            >
              {isOnline ? "Power Off" : "Power On"}
            </Button>
          </div>
        </div>

        <div
          className="position-relative border border-light-subtle rounded overflow-hidden bg-black flex-shrink-0 ms-2"
          style={{ width: "130px", height: "78px" }}
        >
          <Card.Img
            src={item.image}
            alt={item.name}
            className="w-100 h-100 opacity-75"
            style={{ objectFit: "cover" }}
          />

          {isOnline && (
            <span
              className="position-absolute top-0 end-0 bg-danger text-white px-1.5 py-0.5 m-1 rounded font-monospace d-flex align-items-center gap-1"
              style={{
                fontSize: "8px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
              }}
            >
              <span
                className="spinner-grow spinner-grow-sm bg-white"
                style={{ width: "5px", height: "5px" }}
                role="status"
              ></span>
              REC
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
