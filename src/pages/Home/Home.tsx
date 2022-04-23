import HomeHeader from "@Components/HomeHeader";
import Publishers from "@Components/Publishers";

import "./HomePage.scss";

const Home = () => {

  return (
    <div className="home-page">
      <HomeHeader />
      <Publishers />
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
      </div>
    </div>
  );
};

export default Home;
