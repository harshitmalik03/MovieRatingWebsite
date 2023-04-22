import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const LoginLogout = () => {

      const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
        <div class='flex-auto text-6xl my-auto'>Movie Rating Website Login Page</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 m-auto" onClick={() => {loginWithRedirect()}}>Login</button>
        
    </>
    


  )
}

export default LoginLogout