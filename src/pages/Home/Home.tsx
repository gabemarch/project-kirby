import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import './HomePage.scss';

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);

      const response = await axios.get(
        'http://localhost:8080/api/publishers'
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-page-title">Project Kirby</h1>
      <div className="home-page-description">
        <p className="home-page-description-text">Find your favorite comic books and graphic novels, review or share them and enjoy being part of the greatest community!</p>
      </div>
      <SearchBar />
      <div className="carousel-container">
        {isLoading ? <Spinner /> : data.map((publisher) => (
          <Carousel name={publisher.name} imageUrl={publisher.imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default Home;