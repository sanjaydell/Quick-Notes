import React from 'react'
import { useForm } from 'react-hook-form'

function SignUp({onEmailChange, onPasswordChange, onRegisterClick, onLoginClick, onGuestLoginClick, onNameChange}) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onRegister = () => {
    onRegisterClick()
  }

  return (
    <div className='login'>
      <div className='login-image'>
        <img src='QuickNote.png' alt='' />
      </div>
      <form onSubmit={handleSubmit(onRegister)}>
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
          <br />
          <input
            {...register('name',
            {required: {
              value: true,
              message: 'Enter a name'
            },maxLength : {
              value: 12,
              message: 'Maximum 6 characters'
            }}
            )}
            type='text'
            placeholder='  Enter your Name'
            onChange={(event) => onNameChange(event.target.value)}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
        </div>
        <div className='primary' style={{ paddingLeft: '26px' }}>
          <button type='submit' style={{ marginRight: '10px' }} > Register </button>
        </div>
      </form>
      <div className='login-buttons'>
        <h6>
          Already have an account?
          <a href='javascript:;' style={{ marginRight: '10px' }} onClick={() => onLoginClick(true) }> Login </a>
        </h6>
      </div>
    </div>
  )
}

export default SignUp