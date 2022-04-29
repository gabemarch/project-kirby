import "./App.scss";
import ItemCard from "./components/ItemCard";
import Home from "@Pages/Home";
import { LoginForm, RegisterForm } from "@Components/AuthForm/AuthForm";
import NavigationBar from "@Components/NavigationBar";
import { APIProvider } from "./shared/context/apiContext";
import { ShortBoxedAPIProvider } from "./shared/context/shortBoxedContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "@Pages/Profile";
import Upload from "@Pages/Upload";
import ItemView from "@Components/ItemView";
import Footer from "@Components/Footer";
import About from "@Pages/About";
import NewReleases from "@Pages/NewReleases";

function App(props) {
  return (
    <BrowserRouter>
      <APIProvider>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="comics-marvel" element={<ItemCard />} />
            <Route exact path="new-releases" element={<NewReleases />} />
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
