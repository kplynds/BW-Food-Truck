import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

const Home = () => {
  return (
    <Styles>
      <div className="container">
        <div className="head">
          <h2>Your Favorite food Delivered to your Door</h2>

          <button>
            <Link className="link" to="">
              lorem ipsom{" "}
            </Link>
          </button>
        </div>
        <div class ="imgTextPairContainer">
            <img src='' className="homeImg" />
            <img src='' className="homeImg" />
            <div className="txt rightTxt">
            <p className="caption">
                lorem ipsom lorem ipsom lorem ipsom lorem ipsom 
                lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom 
                lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom
             </p>
            </div>
        </div>
        <div class ="imgTextPairContainer">
        <div className="txt rightTxt">
        
            <p className="caption">
                lorem ipsom lorem ipsom lorem ipsom lorem ipsom 
                lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom 
                lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom 
            </p>
        </div>
            <img src='' className="homeImg" />
            <img src='' className="homeImg" />
        </div>
      </div>
      {/* <img className="logo" src={img} alt=""></img> */}
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
  .head{
      width:80%;
      margin:auto;
      display:flex;
      flex-direction:column;
      height: 12vh;
  }

  .container{
      display:flex;
      flex-direction:column;
      width:85%;
      margin:auto;
  }

  .txt{
      display:flex;
      width:40%;
  }
  
  .imgTextPairContainer{
      width: 100%;
      height: 35vh;
      border-style: solid;
      border-width: 2px;
      border-color: black;
      display: flex;
      margin: 2% 0%;
  }

  .homeImg{
    height: 100%;
    width: 30.1%;
    border-style: solid;
    border-width: 4px;
    border-color: black;
    display: flex;
  }

  .caption{
    padding: 20% 0%;
    height: 100%;
    font-size: 120%;
    width: 100%;
  }
`;

const ImgOne = styles.img`
  height: 100%;
  width: 30.1%;
  border-style: solid;
  border-width: 4px;
  border-color: black;
  display: flex;
`;
const ImgTwo = styles.img`
width: 300px;
height: 300px;
border-style: solid;
border-width: 7px;
border-color: black;
display: flex;
`;


export default Home;
