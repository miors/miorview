import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
import RequireAdminAuth from "./components/RequireAdminAuth";
import { Container, Navbar, Stack } from "react-bootstrap";
import jsonProds from "./data/products.json";
import myLogo from "./assets/miorview.png";
import { useLocalStorage } from "usehooks-ts";
import LogoutButton from "./components/LogoutButton";
import FilterButtons from "./components/FilterButtons";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="min-vh-100 bg-body-secondary bg-opacity-25 text-dark d-flex flex-column">
      <Navbar className="bg-white border-bottom py-3">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 position-relative">
          <Navbar.Brand href="/" className="m-0 p-0 d-flex align-items-center">
            <img
              src={myLogo}
              alt="Miorview Company Logo"
              className="d-block img-fluid"
              style={{
                maxHeight: "55px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>

          <div className="position-md-absolute text-center my-2 my-md-0">
            <h1
              className="fw-bold mb-0 text-dark text-uppercase font-monospace d-flex align-items-center justify-content-center gap-2"
              style={{
                fontSize: "1.35rem",
                letterSpacing: "2.5px",
                textShadow: "0.5px 0.5px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              Miorview's Dashboard
            </h1>
          </div>

          <div className="d-flex align-items-center">
            <LogoutButton />
          </div>
        </Container>
      </Navbar>

      <Container className="py-4 flex-grow-1">
        <div className="bg-white rounded border p-2 mb-4">
          <Stack
            direction="horizontal"
            gap={2}
            className="justify-content-center align-items-center"
          >
            <FilterButtons />
          </Stack>
        </div>

        <main className="w-100">
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

function App() {
  const [jsonProducts, setJsonProducts] = useLocalStorage(
    "jsonProducts",
    jsonProds,
  );
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useLocalStorage(
    "isAdminLoggedIn",
    false,
  );
  const [products, setProducts] = useLocalStorage("products", jsonProducts);
  const [filterProducts, setFilterProducts] = useLocalStorage(
    "filterProducts",
    products,
  );

  return (
    <AuthContext.Provider
      value={{
        jsonProds,
        jsonProducts,
        setJsonProducts,
        isLoggedIn,
        setIsLoggedIn,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        products,
        setProducts,
        filterProducts,
        setFilterProducts,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Login />} />
            <Route
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
              path="/dashboard"
            />
            <Route
              element={
                <RequireAdminAuth>
                  <AdminPage />
                </RequireAdminAuth>
              }
              path="/admin"
            />
            <Route element={<Login />} path="/login" />
            <Route element={<ErrorPage />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
