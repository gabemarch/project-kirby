import { useState } from "react";
import { LoginForm, RegisterForm } from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="auth-page">
      <h1>Login or Register</h1>

      {isAuth ? <LoginForm /> : <RegisterForm /> }
    </div>
  )
}

export default AuthPage;