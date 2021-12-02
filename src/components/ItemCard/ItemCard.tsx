import './ItemCard.scss';
import { useAPIData } from '../../shared/context/apiContext';

const ItemCard = () => {
  const data = useAPIData()
  return (
    <>
      {data.map((comic) => (
      <div className="item-card">
        <h3 className="item-card-title">{comic.title}</h3>
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" className="item-card-image" />
        <button className="item-card-button">See more</button>
      </div>
      ))}
    </>
  )
}

export default ItemCard;