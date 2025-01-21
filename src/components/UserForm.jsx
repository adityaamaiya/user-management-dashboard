import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

const UserForm = ({ existingUser }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
  }); // State to store user data

  const [error, setError] = useState(""); // State to store error message
  const navigate = useNavigate();

  useEffect(() => {
    // Check if an existing user is provided
    if (existingUser) {
      setNewUser(existingUser);
    }
  }, [existingUser]); // Update the state when the existing user changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value }); // Update the state with the new user data
  };

  const validateForm = () => {
    // Validate the form data
    if (!newUser.name || !newUser.email || !newUser.website) {
      setError("All fields are required!");
      return false;
    }
    // Basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(newUser.email)) {
      setError("Please enter a valid email!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!validateForm()) return; // Stop if validation fails
    if (existingUser) {
      try {
        updateUser(existingUser.id, newUser);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      try {
        addUser(newUser);
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
    navigate("/"); // Navigate to the home page after successful submission
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        {existingUser ? "Edit" : "Add"} User
      </h2>

      {error && <Alert variant="danger">{error}</Alert>}
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            placeholder="Enter Full name"
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChange}
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="website">
          <Form.Label>Website</Form.Label>
          <Form.Control
            type="text"
            name="website"
            value={newUser.website}
            onChange={handleChange}
            placeholder="Enter website"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
