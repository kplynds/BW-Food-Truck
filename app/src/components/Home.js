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
              Very Dank Food{" "}
            </Link>
          </button>
        </div>
        <div className="imgTextPairContainer">
          <img src="https://www.theburn.com/wp-content/uploads/2019/07/Cuban.jpg" alt="Cuban flank steak meal" className="homeImg" />
          <img src="https://i2.wp.com/www.cookedbyjulie.com/wp-content/uploads/2017/01/pastelitoscbj.jpg?resize=1024%2C682&ssl=1" alt="Hispanic guava pastry" className="homeImg" />
          <div className="txt rightTxt">
            <p className="caption">
              In a mood for Cuban in a pinch? Churrasco? Pastelitos de Guayaba?
              We've got you covered! Order online, delivered to your door.
            </p>
          </div>
        </div>
        <div className="imgTextPairContainer">
          <div className="txt rightTxt">
            <p className="caption">
              How about vegan, gluten free, GMO-free, super food infused, dairy imitation, gourmet, artisan, fresh, locally sourced milkshakes who's proceeds go to breast cancer?
              We have got you covered. We. Have. It. All.
            </p>
          </div>
          <img src="https://www.howtocookthat.net/public_html/wp-content/uploads/2015/09/IMG_9456-550x413.jpg?x19907" alt="Fancy milkshakes" className="homeImg" />
          <img src="https://3.bp.blogspot.com/-1J7gVuABMks/WmcIiqcf3oI/AAAAAAAB6KI/xuqbgsxNPtwgItZjXZdmEADoKDD_DsUzwCLcBGAs/s1600/Rainbow%2BMacaroons.jpg" alt="Rainbow macaroons" className="homeImg" />
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
    padding: 20% 5%;
    height: 100%;
    font-size: 120%;
    width: 100%;
  }
`;
export default Home;
