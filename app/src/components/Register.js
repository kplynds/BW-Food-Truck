import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  roleId: "",
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      e.target.value = e.target.checked;
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const submitValues = {
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
    };
    if (formValues.roleId === "2") {
      axios
        .post(
          "https://food-truck-trackr-api.herokuapp.com/api/auth/register/operator",
          submitValues
        )
        .then((res) => {
          console.log(res)
          const loginValues = {
            username: submitValues.username,
            password: submitValues.password,
          };
          console.log(loginValues)
          axios
            .post(
              "https://food-truck-trackr-api.herokuapp.com/api/auth/login",
              loginValues
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem("roleId", res.data.type);
              localStorage.setItem("token", res.data.token);
              history.push("/dashboard");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (formValues.roleId === "1") {
      axios
        .post(
          "https://food-truck-trackr-api.herokuapp.com/api/auth/register/diner",
          submitValues
        )
        .then((res) => {
          console.log(res)
          const loginValues = {
            username: submitValues.username,
            password: submitValues.password,
          };
          console.log(loginValues)
          axios
            .post(
              "https://food-truck-trackr-api.herokuapp.com/api/auth/login",
              loginValues
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem("roleId", res.data.type);
              localStorage.setItem("token", res.data.token);
              history.push("/dashboard");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="form">
      <form onSubmit={submit}>
        <select
          id="roleId"
          name="roleId"
          value={formValues.roleId}
          onChange={handleChange}
        >
          <option value="">---Choose One---</option>
          <option value="2">Owner / Food Truck</option>
          <option value="1">Foodie / User</option>
        </select>
        <input
          placeholder="email"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          placeholder="username"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="text"
          name="password"
          value={formValues.passowrd}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
