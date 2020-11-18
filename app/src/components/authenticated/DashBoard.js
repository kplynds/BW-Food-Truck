import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const baseUrl = "https://food-truck-trackr-api.herokuapp.com";

const DashBoard = () => {
  const [trucks, setTrucks] = useState([]);
  const history = useHistory();
  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roleId");
    localStorage.removeItem("userId");
    localStorage.removeItem('user');
    history.push("/");
  };
  const fetchTruckData = () => {
    axiosWithAuth()
      .get(`${baseUrl}/api/trucks`)
      .then((res) => {
        console.log(res.data);
        setTrucks(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTruckData();
  }, []);
  
  if (localStorage.getItem('roleId') === 'operator') {
    return (
      <div className="body">
        <div>
          <h2>Operator DashBoard</h2>
          <button onClick={signout}>Signout</button>
        </div>
        <div className="Links">
            <Link to='/newtruck'>
                List a new truck!
            </Link>
        </div>
      </div>
    );
  };
  if (localStorage.getItem('roleId') === 'diner') {
    return (
      <div className='body'>
        <div>
          <h2>Diner Dashboard</h2>
          <button onClick={signout}>Signout</button>
        </div>
        <div className='trucks'>
          <div className='trucks-heading'>
            <h2>Trucks</h2>
          </div>
          <div className='trucks-array'>
            {trucks.map((truck) => {
              return (
                <div key={truck.id}>
                  <h3>{truck.name}</h3>
                  <p>{truck.cuisineType}</p>
                  <img src={truck.imageOfTruck} alt='the food truck' width='250' height='200'/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard;
