import './App.scss';
import ItemCard from './components/ItemCard';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import { APIProvider } from './shared/context/apiContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <APIProvider>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="comics" element={<ItemCard />} />
        </Routes>
      </APIProvider>
    </BrowserRouter>
  );
}

export default App;
