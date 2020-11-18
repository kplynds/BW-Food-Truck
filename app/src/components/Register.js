import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import formSchema from "../registration/registerSchema";
import * as yup from "yup";

const initialFormValues = {
  roleId: "",
  email: "",
  username: "",
  password: "",
};
const initialFormErrors = {
  roleId: "",
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    formSchema
      .isValid(formValues)
      .then((valid) => setDisabled(!valid))
      .catch((err) => alert(err));
  }, [formValues]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
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
      <Errors>
        <div className="roleError">{formErrors.roleId}</div>
        <div className="emailError">{formErrors.email}</div>
        <div className="nameError">{formErrors.username}</div>
        <div className="passwordError">{formErrors.password}</div>
      </Errors>
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
              placeholder={formErrors.email}
              type="email"
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
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
          <Button disabled={disabled}>Submit</Button>
        </div>
      </form>
    </Signup>
  );
};
const Button = styled.button`
  width: 45%;
  color: ${(pr) => pr.theme.black};
  font-weight: 900;
  background: ${(pr) => pr.theme.teritaryColor};
  margin-top: 15px;
  padding: 4%;
  border-radius: 2px;
  border: 1px solid ${(pr) => pr.theme.black};
  box-shadow: 2px 4px 10px 2px;
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
  border: 1px solid ${(pr) => pr.theme.primary};
  box-shadow: 2px 4px 15px 2px;

  h2 {
    font-family: sans-serif;
    color: ${(pr) => pr.theme.teritaryColor};
    background: ${(pr) => pr.theme.teritary};
    border-radius: 2px;
    width: 45%;
    margin: auto;
  }

  input,
  select {
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
const Errors = styled.div`
  padding: 2% 0;
  background: ${(pr) => pr.theme.white};
  color: ${(pr) => pr.theme.danger};
`;
export default Register;
