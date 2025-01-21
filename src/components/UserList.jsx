import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../services/api";
import { Table, Button } from "react-bootstrap";
import { FaUserEdit, FaUserMinus } from "react-icons/fa";

const UserList = () => {
  const [users, setUsers] = useState([]); // Initialize the state with an empty array

  const navigate = useNavigate(); // Access the navigate function

  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    getUsers()
      .then((response) => setUsers(response.data)) // Update the state with the fetched data
      .catch(console.error)
      .finally(() => setLoading(false)); // Set loading to false after data is fetched
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id)); // Update the state to remove the deleted user
      })
      .catch(console.error);
  };

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1); // Initialize the current page state

  const usersPerPage = 5; // Number of users to display per page

  // Calculate the index of the first and last user to display on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // Get the users to display on the current page

  const totalPages = Math.ceil(users.length / usersPerPage); // Calculate total number of pages

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="table-responsive">
      {/* On smaller screens, the table-responsive class ensures that the table becomes horizontally scrollable */}
      <h2 style={{ textAlign: "center" }}>User's List</h2>
      {users.length === 0 && (
        <p style={{ textAlign: "center" }}>No users available</p>
      )}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} style={{}}>
                <td>{user.id}</td>
                <td>{user.name.split(" ")[0] || "NA"}</td>
                <td>{user.name.split(" ")[1] || "NA"}</td>
                <td>{user.username}</td>
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
      )}

      {/* Pagination Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button
          onClick={prevPage}
          variant="secondary"
          disabled={currentPage === 1}
        >
          ←
        </Button>
        <span>{currentPage}</span>
        <Button
          onClick={nextPage}
          variant="secondary"
          disabled={currentPage === totalPages}
        >
          →
        </Button>
      </div>
    </div>
  );
};

export default UserList;
