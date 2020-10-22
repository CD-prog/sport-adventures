import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
  const { handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

const [login, setLogin] = useState({
  email: '',
  password: ''
})

const handleTyping = (e) => {
  setLogin({...login, [e.target.name]: e.target.value})
}

const handleSubmitLogin = (e) => {
  handleLogin(e, login.email, login.password)
}

const handleSubmitSignup = (e) => {
  handleSignup(e, login.email, login.password)
}
  return (
    <form className="loginForm float-right">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          name="email"
          onChange = {handleTyping}
    
          />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <p className="errorMsg">{emailError}</p>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required 
          onChange={handleTyping}
        />
      </div>
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button className="btn-primary btn btn-lg" onClick={handleSubmitLogin}>Sign in</button>
            <br />
            <br />
            <p>Don't have an account?<button className="btn-warning btn btn-lg" onClick={ () => {setHasAccount(!hasAccount)}}>Sign up</button></p>
          </>
        ) : (
            <>
              <button className="btn-primary btn btn-lg" onClick={handleSubmitSignup}>Sign up</button>
              <br />
              <br />
              <p>Already have an account?<button className="btn-warning btn btn-lg"onClick={ () => {setHasAccount(!hasAccount)}}>Sign in</button></p>
            </>
          )}
      </div>
    </form>
  )
}
export default Login