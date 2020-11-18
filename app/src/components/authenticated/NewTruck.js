import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const NewTruck = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    imageOfTruck: "",
    cuisineType: "",
    currentLocation: "37.745783,-119.533328",
    operatorId: parseInt(localStorage.getItem("user")),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://food-truck-trackr-api.herokuapp.com/api/trucks",
        formValues
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h1>New Truck</h1>
        <div className="inputs">
          <label>
            <div className="label">
              <h2>Name:</h2>
            </div>
            <input
              id="name"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="label">
              <h2>Image Url</h2>
            </div>
            <input
              id="imageOfTruck"
              type="text"
              name="imageOfTruck"
              value={formValues.imageOfTruck}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="label">
              <h2>Cuisine Type</h2>
            </div>
            <input
              type="text"
              id="cuisineType"
              name="cuisineType"
              value={formValues.cuisineType}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </div>
      </form>

      <>
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </>
    </div>
  );
};

export default NewTruck;
