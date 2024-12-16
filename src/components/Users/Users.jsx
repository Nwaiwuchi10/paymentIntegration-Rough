import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Button } from "@mui/material";

const UserList = () => {
  const { pathname } = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [user, setUser] = useState([]);

  const [filtered, setFiltered] = useState("");
  const [viewPost, setViewPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("https://api.ogini.com/auth");
      console.log(data);
      setUser(data);
      setLoading(false);
      setError(false);
    };

    fetchPosts();
  }, []);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const userDisplay = user?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="treading hero">
        <div
          className="mg-latest"
          style={{ color: "green", marginTop: "50px" }}
        >
          Ogini User List
        </div>

        <div className="trends-div-plus">
          <>
            {userDisplay?.map((item, i) => (
              <>
                <div className="" key={i}>
                  <div className="mb-4">{item?.firstName}</div>
                </div>
              </>
            ))}
          </>
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
          >
            <GoArrowLeft /> prev
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
    </>
  );
};

export default UserList;
