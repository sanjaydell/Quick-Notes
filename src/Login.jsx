import React from 'react'
import './login.css'
import { useForm } from 'react-hook-form'

function Login({onEmailChange, onPasswordChange, onLoginClick, onRegisterClick, onGuestLoginClick}) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = () => {
    onLoginClick()
  }

  return (
    <>
      <div className='login'>
        <div className='login-image'>
          <img src='QuickNote.png' alt='' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='login-fields'>
            <input
              {...register('email',
              {pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                message: 'Enter valid email'
              },required : {
                value: true,
                message: 'Enter a email'
              }}
              )}
              type='text'
              placeholder='  Enter Email-Id'
              onChange={(event) => onEmailChange(event.target.value)}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            <br />
            <input
              {...register('password',
              {required: {
                value: true,
                message: 'Enter Password'
              },minLength : {
                value: 6,
                message: 'Minimum 6 characters required'
              }}
              )}
              type='password'
              placeholder='  Enter Password'
              onChange={(event) => onPasswordChange(event.target.value)}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
          </div>
          <div className='primary' style={{ paddingLeft: '26px' }}>
            <button type='submit'> Log-In </button>
          </div>
        </form>
        <div className='login-buttons' style={{ paddingLeft: '18px' }}>
          <button style={{ marginLeft: '55px' }} onClick={() => onGuestLoginClick()}>Guest Login</button>
          <br />
          <h6>
            Don't have an account?
            <a href='javascript:;' style={{ marginRight: '25px' }} onClick={() => onRegisterClick(false) }> Register </a>
          </h6>
        </div>
      </div>
    </>
  )
}

export default Login
