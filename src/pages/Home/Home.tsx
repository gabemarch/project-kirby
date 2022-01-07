import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import HomeHeader from '../../components/HomeHeader';
import SearchBar from '../../components/SearchBar';
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
      <HomeHeader />
      <div className="home-page-description">
        <p className="home-page-description-text">Find your favorite comic books and graphic novels, review or share them and enjoy being part of the greatest community!</p>
      </div>
      <SearchBar />
      <div className="carousel-container">
        {data.map((publisher) => (
          <Carousel name={publisher.name} imageUrl={publisher.imageUrl} isLoading={isLoading} />
        ))}
      </div>
    </div>
  )
}

export default Home;