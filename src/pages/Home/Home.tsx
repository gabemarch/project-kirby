import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "@Components/Carousel";
import HomeHeader from "@Components/HomeHeader";

import "./HomePage.scss";

const Home = () => {
  const [publisherData, setPublisherData] = useState<any[]>(['Marvel', 'DC', 'Image Comics', 'IDW', 'Dark Horse', 'Vertigo']);
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
