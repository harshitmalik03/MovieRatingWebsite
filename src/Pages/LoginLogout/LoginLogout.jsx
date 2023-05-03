import { useAuth0 } from '@auth0/auth0-react';
import "./LoginLogout.css";
import bgimg from "./back.jpg";
import logoimg from "./logo (1).png";
import React from 'react';
import marvel from './marvel.mp4';
import logoimg1 from "./logo-no-background.png";

const LoginLogout = () => {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      {/* <div class='flex-auto text-6xl my-auto'>Movie Rating Website Login Page</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 m-auto" onClick={() => {loginWithRedirect()}}>Login</button> */}
      <section class="container">
        <div class="head">
          <img src={logoimg1} alt="logo" />
        </div>
      </section>
      <section class="banner">

        {/* <img src={bgimg} alt="background" className="fit" /> */}
        <video autoPlay loop muted className="fit">
          <source src={marvel} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="box">
          <div class="heading">
            <h2>Lights. Camera. Opinions.</h2>
            <h5>Discover, rate, and discuss your favorite movies and TV shows.</h5>
            <p>Ready to review?</p>
          </div>
          <div class="search">
            <button onClick={() => { loginWithRedirect() }}>Get Started</button>
            {/* <button onClick={() => { loginWithRedirect() }}>SignUp</button> */}
          </div>
        </div>
      </section>

    </>

  )
}

export default LoginLogout