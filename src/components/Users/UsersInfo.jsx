import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Button } from "@mui/material";

const UsersInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUsers = async (page, pageSize) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:4100/admin-user/users/pag/all?page=${page}&pageSize=${pageSize}`
      );
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="treading hero">
      <div className="mg-latest" style={{ color: "green", marginTop: "50px" }}>
        Ogini User List
      </div>

      <div className="trends-div-plus">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading users. Please try again.</p>}
        {!loading && !error && users.length === 0 && <p>No users found.</p>}

        {!loading &&
          !error &&
          users.map((user, index) => (
            <div key={index} className="mb-4">
              {user?.firstName} <span>{user?.lastName}</span>
            </div>
          ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "5px",
        }}
      >
        <Button
          style={{ marginRight: "15px" }}
          variant="outlined"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GoArrowLeft /> Prev
        </Button>

        <Button
          style={{ marginLeft: "15px" }}
          variant="outlined"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <GoArrowRight /> Next
        </Button>
      </div>
    </section>
  );
};

export default UsersInfo;
