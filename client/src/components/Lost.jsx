import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styling/Lost.css";

const Lost = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching items");
      });
  }, []);

  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/api/items/search?query=${query}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error searching items");
      });
  };

  return (
    <div id="all">
      <div className="search">
        <h1>Lost Items</h1>
        <div className="search2">
          <input
            type="text"
            className="inp"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for lost items"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="items">
        {items.map((item) => (
          <div key={item._id} className="item">
            <img src={`http://localhost:5000/${item.image}`} alt={item.name} />
            <div
              className="item-details"
              style={{ color: "white", fontSize: "1.4em" }}
            >
              <p>Name: {item.name}</p>
              <p>USN: {item.usn}</p>
              <p>Phone: {item.phone}</p>
              <p>Location: {item.location}</p>
              <p>description: {item.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lost;
