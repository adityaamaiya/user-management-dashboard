import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../services/api"; 
import { Table, Button } from "react-bootstrap";
import { FaUserEdit, FaUserMinus } from "react-icons/fa";

const UserList = () => {
  const [users, setUsers] = useState([]); // Initialize the state with an empty array

  const navigate = useNavigate(); // Access the navigate function

  useEffect(() => {  // Fetch users from the API when the component mounts
    getUsers()
      .then((response) => setUsers(response.data)) // Update the state with the fetched users
      .catch(console.error);
  }, []);

  
  const handleDelete = (id) => {
    deleteUser(id) 
      .then(() => {
        setUsers(users.filter((user) => user.id !== id)); // Update the state to remove the deleted user
      })
      .catch(console.error);
  };

  return (
    <div className="table-responsive"> 
      <h2 style={{ textAlign: "center" }}>User's List</h2>
      {users.length === 0 && (
        <p style={{ textAlign: "center" }}>No users available</p>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{}}>
              <td>{user.id}</td>
              <td>{user.name.split(" ")[0] || "NA"}</td>
              <td>{user.name.split(" ")[1] || "NA"}</td>
              <td>{user.email}</td>
              <td>{user.website || "NA"}</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <Button
                  variant="warning"
                  onClick={() => navigate("/editUser", { state: user })}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaUserEdit style={{ marginRight: "8px" }} />
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user.id)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaUserMinus style={{ marginRight: "8px" }} />
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
