import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    
        username: "",
        password: "",
      
}

const Login = (props) => {
    const history = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues);
    
      const handleChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      };
    
      const submit = (e) => {
        e.preventDefault();
        axios
          .post('https://food-truck-trackr-api.herokuapp.com/api/auth/login', formValues)
          .then((res) => {
            console.log(res);
            localStorage.setItem('roleId', res.data.type)
            localStorage.setItem('token', res.data.token)
            setFormValues(initialFormValues);
            history.push('/dashboard')
            // need some if + then logic to decide which endpoint to sent post request to 

            // window.localStorage.setItem("token", res.data.payload);
            // props.history.push("/bubblepage");
          })
          .catch((err) => {
            console.log(`this is the error: ${err}`);
          });
      };
      return (
        <div className="body">
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
              <button>Submit</button>
            </form>
          </div>
        </div>
      );
}

export default Login 