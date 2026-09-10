import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import RequireAuth from "./components/RequireAuth";
import { Container, Navbar } from "react-bootstrap";
import products from "./data/products.json";

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Miorview Home</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<Login />} />
            <Route
              element={
                <RequireAuth>
                  <Dashboard products={products} />
                </RequireAuth>
              }
              path="/dashboard"
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
