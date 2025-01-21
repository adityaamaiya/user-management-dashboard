import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { enqueueSnackbar } from "notistack";

const UserForm = ({ existingUser }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (existingUser) {
      setNewUser(existingUser);
    }
  }, [existingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const validateForm = () => {
    if (!newUser.name || !newUser.email || !newUser.website) {
      enqueueSnackbar("All fields are required!", { variant: "error" });
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(newUser.email)) {
      enqueueSnackbar("Please enter a valid email!", { variant: "error" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (existingUser) {
        await updateUser(existingUser.id, newUser);
        enqueueSnackbar("User updated successfully!", { variant: "success" });
      } else {
        await addUser(newUser);
        enqueueSnackbar("User added successfully!", { variant: "success" });
      }
      navigate("/");
    } catch (error) {
      console.error("Error during form submission:", error);
      enqueueSnackbar("An error occurred. Please try again.", {
        variant: "error",
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        {existingUser ? "Edit" : "Add"} User
      </h2>
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
