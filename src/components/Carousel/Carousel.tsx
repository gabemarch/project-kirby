import './Carousel.scss'
import placeholder from '../../assets/images/placeholder.jpg';

const Carousel = (props) => {
  return (
  <div className="carousel">
    <h3 className="carousel-title">{props.title || 'Default'}</h3>
    <div className="carousel-card">
      <p className="carousel-card-name">{props.name || 'Default'}</p>
      <img src={placeholder} alt="" className="carousel-card-image" />
      <button className="carousel-card-button">See more</button>
    </div>
  </div>
  )
}

export default Carousel;