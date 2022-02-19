import React from 'react'

function Login({onEmailChange, onPasswordChange, onLoginClick, onRegisterClick, onLogoutClick}) {
  return (
    <>
      <div className='login'>
        <input type='text' placeholder='Enter Email-Id' onChange={(event) => onEmailChange(event.target.value)} />
        <input type='password' placeholder='Enter Password' onChange={(event) => onPasswordChange(event.target.value)} />
        <button onClick={() => onLoginClick() }> Log-In </button>
        <button onClick={() => onRegisterClick(false) }> Register </button>
        <button onClick={() => onLogoutClick() }> Log-out </button>
      </div>
      
    </>
  )
}

export default Login
