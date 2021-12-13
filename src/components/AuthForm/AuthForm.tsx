import { Link } from 'react-router-dom';
import './AuthForm.scss';

const LoginForm = () => {
  return (
    <div className="auth-form login-form">
      <h3 className="auth-title">Login</h3>
      <input
        type="text"
        placeholder="Username"
        className="auth-input login-username" />
      <input
        type="text"
        placeholder="Password"
        className="auth-input login-password" />
      <button className="auth-submit">Login</button>
      <Link to="/auth/forgot-password">Forgot password?</Link>
      <div className="dont-have-account">
        <span className="dont-have-account-text">Don't have account?</span>
        <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className="auth-form register-form">
      <h3 className="auth-title">Create an account</h3>
      <input
        type="text"
        placeholder="Username"
        className="auth-input register-form-username" />
      <input
        type="email"
        placeholder="E-mail"
        className="auth-input register-form-email" />
      <input
        type="password"
        placeholder="Password"
        className="auth-input register-form-password" />
      <input
        type="password"
        placeholder="Confirm Password"
        className="auth-input register-form-confirm-password" />
      <div className="register-form-terms-and-conditions">
        <input
          type="checkbox"
          name=""
          id=""
          className="register-form-checkbox" />
        <span className="register-form-terms-and-conditions-text">I accept the terms and conditions</span>
      </div>
      <button className="auth-submit register-form-button">Create account</button>
      <div className="auth-already-have-account">
        <span className="auth-already-have-account-text">Already have an account?</span>
        <Link to="/auth/login" className="auth-already-have-account-cta">Login</Link>
      </div>
    </div>
  );
};

export { LoginForm, RegisterForm };
