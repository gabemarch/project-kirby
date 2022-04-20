import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "@Components/Carousel";
import HomeHeader from "@Components/HomeHeader";
import SearchBar from "@Components/SearchBar";
import "./HomePage.scss";

const Home = () => {
  const [publisherData, setPublisherData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);

      const response = await axios.get("http://localhost:8080/api/publishers");
      if (response.status === 200) {
        setPublisherData(response.data);
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="home-page">
      <HomeHeader />
      <div className="home-page-description">
        <p className="home-page-description-text">
          Find your favorite comic books and graphic novels, review or share
          them and enjoy being part of the greatest community!
        </p>
      </div>
      <SearchBar />
      <div className="carousel-container">
        {/* {publisherData ? (
          publisherData.map((publisher) => (
            <Carousel
              name={publisher.name}
              imageUrl={publisher.imageUrl}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Carousel
            name={"Default"}
            imageUrl={"publisher.imageUrl"}
            isLoading={isLoading}
          />
        )} */}
        <Carousel
          name={"Default"}
          imageUrl={"publisher.imageUrl"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Home;
