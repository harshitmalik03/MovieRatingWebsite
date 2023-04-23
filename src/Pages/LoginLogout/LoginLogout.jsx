import { useAuth0 } from '@auth0/auth0-react';
import "./LoginLogout.css"
import "./back.jpg"
import React from 'react'

const LoginLogout = () => {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      {/* <div class='flex-auto text-6xl my-auto'>Movie Rating Website Login Page</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 m-auto" onClick={() => {loginWithRedirect()}}>Login</button> */}
      <section class="container">
        <div class="head">
          <img src="./logo (1).png" alt="logo" />
        </div>
      </section>
      <section class="banner">
        <img src="./back.jpg" alt="background" className="fit" />
        <div class="box">
          <div class="heading">
            <h2>Lights. Camera. Opinions.</h2>
            <h5>Discover, rate, and discuss your favorite movies and TV shows.</h5>
            <p>Ready to review?</p>
          </div>
          <div class="search">
            <button onClick={() => { loginWithRedirect() }}>Login</button>
            <button onClick={() => { loginWithRedirect() }}>SignUp</button>
          </div>
        </div>
      </section>

    </>

  )
}

export default LoginLogout