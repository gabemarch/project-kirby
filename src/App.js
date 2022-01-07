import './App.scss';
import ItemCard from './components/ItemCard';
import Home from './pages/Home';
import { LoginForm, RegisterForm } from "./components/AuthForm/AuthForm";
import NavigationBar from './components/NavigationBar';
import { APIProvider } from './shared/context/apiContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import ItemView from './components/ItemView';
import Footer from './components/Footer';
import About from './pages/About';

function App(props) {
  return (
    <BrowserRouter>
      <APIProvider>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="comics-marvel" element={<ItemCard />} />
          <Route path="comics-marvel/:id" element={<ItemView />} />
          <Route exact path="auth/register" element={<RegisterForm />} />
          <Route exact path="auth/login" element={<LoginForm />} />
          <Route exact path="auth/my-profile" element={<Profile />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="auth/upload" element={<Upload />} />
        </Routes>
        <Footer />
      </APIProvider>
    </BrowserRouter>
  );
}

export default App;
