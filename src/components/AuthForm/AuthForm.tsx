const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="auth-title">Login</h3>
    </div>
  )
}

const RegisterForm = () => {
  return(
  <div className="register-form">
    <h3 className="auth-title">Register</h3>
    <input type="text" placeholder="Username" className="register-username" />
    <input type="email" placeholder="E-mail" className="register-email" />
    <input type="password" placeholder="Password" className="register-password" />
    <input type="password" placeholder="Confirm Password" className="register-confirm-password" />
    <button className="submit">Register</button>
  </div>
  )
}


export { LoginForm, RegisterForm }