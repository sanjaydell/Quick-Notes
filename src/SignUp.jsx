import React from 'react'

function SignUp({onEmailChange, onPasswordChange, onRegisterClick, onLoginClick, onLogoutClick}) {
  return (
    <div className='signup'>
      <input type='text' placeholder='Enter Email-Id' onChange={(event) => onEmailChange(event.target.value)} />
        <input type='password' placeholder='Enter Password' onChange={(event) => onPasswordChange(event.target.value)} />
        <button onClick={() => onRegisterClick() }> Register </button>
        <button onClick={() => onLoginClick(true) }> Log-In </button>
    </div>
  )
}

export default SignUp