import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
          console.log(res);
          const loginValues = {
            username: submitValues.username,
            password: submitValues.password,
          };
          console.log(loginValues);
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
          console.log(res);
          const loginValues = {
            username: submitValues.username,
            password: submitValues.password,
          };
          console.log(loginValues);
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
    <Signup>
      <form onSubmit={submit}>
        <h1>SIGN UP</h1>
        <label>
          <div className="label">
            <h2>Role:</h2>
          </div>
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
        </label>
        <div className="inputs">
          <label>
            <div className="label">
              <h2>Email:</h2>
            </div>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="label">
              <h2>Username:</h2>
            </div>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="label">
              <h2>Password:</h2>
            </div>
            <input
              placeholder="password"
              type="text"
              name="password"
              value={formValues.passowrd}
              onChange={handleChange}
            />
          </label>
          <Button>Submit</Button>
        </div>
      </form>
    </Signup>
  );
};
const Button = styled.button`
width:45%;
  color: ${(pr) => pr.theme.black};
  font-weight:900;
  background: ${(pr) => pr.theme.teritaryColor};
  margin-top: 15px;
  padding: 4%;
  border-radius:2px;
  border:1px solid ${(pr) => pr.theme.black};
  box-shadow:2px 4px 10px 2px;
  }
  
`;

const Signup = styled.div`
  width: 60%;
  background: ${(pr) => pr.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 5%;
  border-radius: 2%;
  border:1px solid ${(pr) => pr.theme.primary};
  box-shadow:2px 4px 15px 2px;

  h2 {
    font-family: sans-serif;
    color:${(pr) => pr.theme.teritaryColor};
    text-shadow:2px 4px 10px 2px;
  }

  }

  input, select{
    font-size: 20px;
    outline: 0;
    transition: all 0.9s;
    border-radius: 2%;
    background-color: ${(pr) => pr.theme.secondaryColor};
    padding: 15px;
    border-bottom: 2px solid black;

    :focus {
      background-color: white;
      border: none;
    }
  }
`;
export default Register;
