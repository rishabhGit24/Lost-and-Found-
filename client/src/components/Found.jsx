import axios from "axios";
import React, { useState } from "react";
import "./styling/Found.css";

const Found = () => {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    phone: "",
    location: "",
    description: "",
    status: "found",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("usn", formData.usn);
    data.append("phone", formData.phone);
    data.append("location", formData.location);
    data.append("description", formData.description);
    data.append("status", formData.status);
    data.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/items",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Item added:", response.data);
      alert("Item added");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="form1">
      <div className="head" style={{ backgroundColor: "rgba(0, 0, 0, 0.35)", width: "25%", borderRadius: "15px" }}>
        <h1>ENTER DETAILS<br></br> OF<br></br> FOUND OBJECT</h1>
      </div>
      <div className="form2" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", width: "55em", borderRadius: "20px" }}>
        <form onSubmit={handleSubmit} style={{ marginTop: "4em", width: "90%", marginLeft: "3em", paddingBottom: "4em", textAlign: " center" }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="usn"
            value={formData.usn}
            onChange={handleChange}
            placeholder="USN"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input type="file" name="image" onChange={handleFileChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Found;
