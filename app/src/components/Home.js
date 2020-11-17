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

        <div className="homeImg">img</div>
        <div className="txt rightTxt">
          <p>lorem ipsom</p>
        </div>
        <div className="homeImg">img</div>
        <div className="txt leftTxt">
          <p>lorem ipsom</p>
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
  margin-top:10%;
  .head{
      width:80%;
      margin:auto;
      display:flex;
      flex-direction:column;
      height:40vh;
  }

  .container{
      display:flex;
      flex-direction:column;
      width:85%;
      margin:auto;
  }

  .homeImg{
      width:65%;
      display:flex;
border:1px solid black;
  }
  .txt{
      display:flex;
      width:20%;
      border:1px solid red;
  }
  

`;
export default Home;
