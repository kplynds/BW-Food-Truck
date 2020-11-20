import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

const Home = () => {
  return (
    <Styles>
      <div className="container">
        <div className="head">
          <h1>Your Favorite food Delivered to your Door</h1>
          <button>
            <Link className="link" to="">
              Very Dank Food{" "}
            </Link>
          </button>
        </div>
        <div className="imgTextPairContainer">
          <div className="txt">
            <p className="caption">
              In a mood for Cuban in a pinch? Churrasco? Pastelitos de Guayaba?
              We've got you covered! Order online, delivered to your door.
            </p>
          </div>
          <div className="homeImg tR"></div>
        </div>
        <div className="imgTextPairContainer">
          <div className="txt ">
            <p className="caption">
              How about vegan, gluten free, GMO-free, super food infused, dairy
              imitation, gourmet, artisan, fresh, locally sourced milkshakes
              who's proceeds go to breast cancer? We have got you covered. We.
              Have. It. All.
            </p>
          </div>
          <div className="homeImg tL"></div>
        </div>
        <div className="imgTextPairContainer">
          <div className="txt ">
            <p className="caption">Delicious desserts</p>
          </div>
          <div className="homeImg bR"></div>
        </div>
        <div className="imgTextPairContainer">
          <div className="txt ">
            <p className="caption">and colorful snacks</p>
          </div>
          <div className="homeImg bL"></div>
        </div>
      </div>
    </Styles>
  );
};

const Styles = styles.div`
width:100%;
display: flex;
flex-direction:column;
  justify-content: center;
  margin:auto;
  margin-top: 3%;
  margin-bottom:5%;
  .head{
      margin:auto;
      display:flex;
      flex-direction:column;
      height: 12vh;
  }

  .link{
    text-decoration:none;
    color:${(pr) => pr.theme.black};
  }
  .container{
      display:flex;
      flex-direction:column;
      margin:auto;
  }

  .txt{
      display:flex;
      background-color:${(pr) => pr.theme.secondary};
      justify-content:center;
  }
  
  .imgTextPairContainer{
    width:90%;
    border:4px solid ${(pr) => pr.theme.primary};
      display: flex;
      flex-direction:column;
      margin: auto;
  }

  .homeImg{
   border:3px solid ${(pr) => pr.theme.primaryColor};
   border-radius:2px;
    display: flex;
  }

  .caption{
    padding: 5%;
    font-size:1.5rem;
    font-weight:500;
    display:flex;
    
  }
`;
export default Home;
