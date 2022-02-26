import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInAnonymously,
  updateProfile
 } from 'firebase/auth'
import { auth } from './firebase-config'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'

function App () {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  console.log(registerName)
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
      const userProfile = updateProfile(auth.currentUser, {
        displayName: String(registerName),
      }).catch((error) => {
        console.log(error)
      })
      // .then(function(result) {
      //   return updateProfile( auth, {
      //     displayName: String(registerName)
      //   })
      // }).catch(function(error) {
      //   console.log(error);
      // })
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
            onNameChange={setRegisterName}
          />
        }
        </>
      )
    }
    </>
  )
}

export default App