import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import fire from './fire';
import PrivateRoute from "./components/PrivateRoute"

function App({ history }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = (evt, email, password) => {

    evt.preventDefault();
    clearErrors();



    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      })
  }
  const handleSignup = (evt, email, password) => {
    evt.preventDefault();
    clearErrors();

    console.log('handle signup is happening!!!', email, password)
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
        }
      })
  }
  const handleLogout = () => {
    setUser(null)
    fire.auth().signOut();
    history.push('/');
  }
  
  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if (user !== null) {
          clearInputs();
          setUser(user)
          history.push('/profile');
        } else {
          setUser(null)
        }
      })
    }
    authListener();
  },[history])

  return (
    <div className="container">
      <Navbar isAuthed={user !== null} />
      <Route exact path="/" component={()=> <Home user={user}/>} />
      
      <PrivateRoute isAuthed={user !== null} path="/profile" 
      component={()=><Profile user={user} handleLogout={handleLogout}/>}
      />
      {/* <PrivateRoute isAuthed={user !== null} path="/profile" 
      component={()=> <Item user={user}/>}
      /> */}
  
      <Route path="/login" component={() => <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError} />} />


      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"></script>
    </div>
  );
}

export default withRouter(App);
