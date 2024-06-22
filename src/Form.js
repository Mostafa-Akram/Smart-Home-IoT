import React, { useState } from "react";
import "./App.css";

export default function Form() {
  const [devices, setDevices] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const device = {
      name: formData.get("Name"),
      id: formData.get("ID"),
      status: "off",
    };
    setDevices([...devices, device]);
    e.target.reset();
  };

  const handleClick = (index) => {
    const newDevices = [...devices];
    newDevices[index].status =
      newDevices[index].status === "off" ? "on" : "off";
    setDevices(newDevices);
  };

  return (
    <div>
      {devices.map((device, index) => (
        <div
          className={`card ${device.status}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          <h3>{device.name}</h3>
          <p>ID: {device.id}</p>
          <p>Status: {device.status}</p>
        </div>
      ))}
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="reg">Register New device</h1>
          <label className="Name" htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Name..."
            required
          />
          <label className="ID" htmlFor="ID">ID:</label>
          <input type="text" id="ID" name="ID" placeholder="ID..." required />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

