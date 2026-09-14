import { useState, useContext } from "react";
import { Button, Container, Form, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function login() {
    const isCorrectUsername = username === "john@mail.com";
    const isCorrectPassword = password === "admin";
    if (isCorrectUsername && isCorrectPassword) {
      authContext.setIsAdminLoggedIn(true);
      authContext.setIsLoggedIn(true);
      authContext.setIsAdminLoggedIn(true);
      navigate("/dashboard");
    }
  }

  if (authContext.isLoggedIn || authContext.isAdminLoggedIn) {
    return (
      <Container className="py-5 text-center">
        <Card className="bg-light p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h5 className="fw-bold text-dark mb-2">Already Authenticated</h5>
            <p className="text-secondary small mb-3">
              You are logged into the control platform.
            </p>
            <Button
              variant="primary"
              className="btn-sm fw-semibold w-100"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm={10} md={6} lg={4}>
          <Card className=" p-3 rounded bg-light text-dark">
            <Card.Body>
              <div className="text-center mb-4">
                <h4 className="fw-bold mb-1 text-dark">
                  System Authentication
                </h4>
                <p className="text-secondary small mb-0">
                  Sign in to your Miorview account
                </p>
              </div>

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="small fw-semibold text-secondary">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="py-2 text-dark bg-white small"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="small fw-semibold text-secondary">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 text-dark bg-white small"
                  />
                </Form.Group>

                <div className="border rounded p-2 mb-4">
                  <div
                    className="text-secondary fw-medium d-flex gap-1.5 align-items-center"
                    style={{ fontSize: "10px" }}
                  >
                    <span>DEMO ACCESS CREDENTIALS:</span>
                  </div>
                  <div
                    className="text-dark font-monospace mt-1"
                    style={{ fontSize: "11px" }}
                  >
                    User:{" "}
                    <code className="text-dark-emphasis fw-bold">
                      john@mail.com
                    </code>{" "}
                    <br />
                    Pass:{" "}
                    <code className="text-dark-emphasis fw-bold">admin</code>
                  </div>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 fw-semibold"
                >
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
