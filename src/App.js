import './App.scss';
import ItemCard from './components/ItemCard';
import Home from './pages/Home';
import { LoginForm, RegisterForm } from "./components/AuthForm/AuthForm";
import NavigationBar from './components/NavigationBar';
import { APIProvider } from './shared/context/apiContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <APIProvider>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="comics-marvel" element={<ItemCard />} />
          <Route exact path="auth/register" element={<RegisterForm />} />
          <Route exact path="auth/login" element={<LoginForm />} />
          <Route exact path="auth/my-profile" element={<Profile />} />
        </Routes>
      </APIProvider>
    </BrowserRouter>
  );
}

export default App;
