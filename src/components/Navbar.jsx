import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaUser } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" expand="lg" style={{ marginBottom: "10px" }}>
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaUser style={{ marginRight: "8px" }} />
          User Management Dashboard
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button
            variant="success"
            onClick={() => navigate("/addUser")}
            className="mr-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaUserPlus style={{ marginRight: "8px" }} />
            Add User
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
