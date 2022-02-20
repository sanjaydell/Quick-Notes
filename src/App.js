import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInAnonymously
 } from 'firebase/auth'
import { auth } from './firebase-config'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'

function App () {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
    }  catch (err) {
      console.log(err.message)
    }
  }

  const anonymousSignIn = async () => {
    try {
      const user = await signInAnonymously(auth)
      console.log(user)
    }  catch (err) {
      console.log(err.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
    }  catch (err) {
      console.log(err.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <>
    {user ?
      <Home onLogoutClick={logout} user={user} /> : (
        <>
        {isLogin ?
          <Login
            onEmailChange={setLoginEmail}
            onPasswordChange={setLoginPassword}
            onLoginClick={login}
            onRegisterClick={setIsLogin}
            onGuestLoginClick={anonymousSignIn}
          /> :
          <SignUp
            onEmailChange={setRegisterEmail}
            onPasswordChange={setRegisterPassword}
            onRegisterClick={register}
            onLoginClick={setIsLogin}
            onGuestLoginClick={anonymousSignIn}
          />
        }
        </>
      )
    }
    </>
  )
}

export default App