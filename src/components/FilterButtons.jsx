import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FilterButtons = () => {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;
  const location = useLocation();

  // Local state to keep track of the currently active filter group
  const [activeFilter, setActiveFilter] = useState("All");

  function handleFilter(device) {
    setActiveFilter(device);
    if (device.toLowerCase() === "all") {
      authContext.setProducts(authContext.jsonProds);
    } else {
      const filteredDevices = authContext.jsonProds.filter(
        (p) => p.category === device.toLowerCase(),
      );
      authContext.setProducts(filteredDevices);
    }
  }

  if (isLoggedIn && location.pathname !== "/login") {
    // Config layout array to cleanly generate buttons with corresponding dashboard icons
    const filters = ["All", "Camera", "Sensor", "Window"];

    return (
      <ButtonGroup
        size="sm"
        className="border border-light-subtle rounded-2 p-1 bg-light"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <Button
              key={filter}
              onClick={() => handleFilter(filter)}
              variant={isActive ? "primary" : "light"}
              className={`d-inline-flex align-items-center gap-1.5 px-3 py-1.5 fw-semibold border-0 rounded-2 text-uppercase font-monospace ${
                isActive ? "text-white" : "text-secondary"
              }`}
              style={{ fontSize: "11px", letterSpacing: "0.5px" }}
            >
              <i className={`${isActive ? "text-white" : "text-muted"}`}></i>
              {filter}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  } else {
    return <h2>Hello!</h2>;
  }
};

export default FilterButtons;
