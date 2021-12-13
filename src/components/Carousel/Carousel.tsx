import './Carousel.scss'
import placeholder from '../../assets/images/placeholder.jpg';
import { Link } from 'react-router-dom';

const Carousel = ({name, imageUrl}) => {
  return (
  <div className="carousel">
    <div className="carousel-card">
      <p className="carousel-card-name">{name || 'Default'}</p>
      <img src={imageUrl ? imageUrl : placeholder} alt="" className="carousel-card-image" />
      <Link to={`/comics-${name}`} ><button className="carousel-card-button">See more</button></Link>
    </div>
  </div>
  )
}

export default Carousel;