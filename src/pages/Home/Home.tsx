import Carousel from '../../components/Carousel';
import SearchBar from '../../components/SearchBar';
import './HomePage.scss';

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Project Kirby</h1>
      <div className="home-page-description">
        <p className="home-page-description-text">Find your favorite comic books and graphic novels, review or share them and enjoy being part of the greatest community!</p>
      </div>
      <SearchBar />
      <Carousel />
    </div>
  )
}

export default Home;