import React from 'react'
import './login.css'

function Login({onEmailChange, onPasswordChange, onLoginClick, onRegisterClick, onGuestLoginClick}) {
  return (
    <>
      <div className='login'>
        <div className='login-image'>
          <img src='QuickNote.png' alt='' />
        </div>
        <div className='login-fields'>
          <input type='text' placeholder='  Enter Email-Id' onChange={(event) => onEmailChange(event.target.value)} />
          <br />
          <br />
          <input type='password' placeholder='  Enter Password' onChange={(event) => onPasswordChange(event.target.value)} />
        </div>
        <div className='primary'>
          <button onClick={() => onLoginClick() }> Log-In </button>
        </div>
        <div className='login-buttons'>
          <br />
          <button style={{ marginRight: '25px' }} onClick={() => onRegisterClick(false) }> Register </button>
          <br />
          <button style={{ marginLeft: '5px' }} onClick={() => onGuestLoginClick()}>Guest Login</button> 
        </div>
      </div>
    </>
  )
}

export default Login
