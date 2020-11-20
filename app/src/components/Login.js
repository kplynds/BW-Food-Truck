import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import * as yup from 'yup';

const initialFormValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const history = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  // const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://food-truck-trackr-api.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        console.log(res);
        if (res.data.type === "diner") {
          localStorage.setItem("user", res.data.diner.dinerId);
        }
        if (res.data.type === "operator") {
          localStorage.setItem("user", res.data.operator.operatorId);
        }
        localStorage.setItem("roleId", res.data.type);
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
        // need some if + then logic to decide which endpoint to sent post request to

        // window.localStorage.setItem("token", res.data.payload);
        // props.history.push("/bubblepage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Signin className="body">
      <div className="form">
        <form onSubmit={submit}>
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
          <Button>Submit</Button>
        </form>
      </div>
    </Signin>
  );
};

const Button = styled.button`
  width: 45%;
  color: ${(pr) => pr.theme.black};
  font-weight: 900;
  background: ${(pr) => pr.theme.secondary};
  margin-top: 15px;
  padding: 4%;
  border-radius: 2px;
  border: 2px solid ${(pr) => pr.theme.teritaryColor};
  box-shadow: 2px 4px 10px 2px;
  &:hover {
    border: 2px solid ${(pr) => pr.theme.secondary};
    background: ${(pr) => pr.theme.teritaryColor};
    color: ${(pr) => pr.theme.white};
  }
`;
const Signin = styled.div`
  width: 60%;
  background: ${(pr) => pr.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10%;
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

export default Login;
