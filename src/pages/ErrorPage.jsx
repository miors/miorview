import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm={10} md={6} lg={4}>
          <Card className="p-3 rounded bg-light text-dark text-center">
            <Card.Body>
              <div className="text-center mb-4">
                <h4 className="fw-bold mb-1 text-dark">
                  404 - Feed Terminated
                </h4>
                <p className="text-secondary small mb-0">
                  The requested endpoint could not be resolved
                </p>
              </div>

              <div className="border border-light-subtle rounded p-2 mb-4 text-start">
                <div
                  className="text-dark font-monospace mt-1"
                  style={{ fontSize: "11px" }}
                >
                  ERR_CODE:"ROUTE_NOT_FOUND"
                  <br />
                  STATUS:"Disconnected"
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <Button
                  variant="primary"
                  className="w-100 py-2 fw-semibold btn-sm tracking-wide shadow-sm"
                  onClick={() => navigate("/dashboard")}
                >
                  <i className="bi bi-speedometer2 me-1.5"></i>
                  Return to Dashboard
                </Button>

                <Button
                  variant="outline-secondary"
                  className="w-100 py-2 fw-semibold text-dark bg-white"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
