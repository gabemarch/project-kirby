import { useLocation } from "react-router-dom";
import Carousel from "../Carousel";

const ItemView = () => {
  const { state } = useLocation()
  const { comic } = state;
  console.log(comic);
  return comic ? (
    <div className="item-view">
      <h1>{comic.title}</h1>
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
      <p>{comic.description}</p>
      <p>{comic.format}</p>
      <p>Pages: {comic.pageCount}</p>
      <h2>Creators</h2>
      {comic.creators.items.map(creator => (
        <p>{creator.name}</p>
      ))}
      <p>Characters: {comic.characters.items.map(character => <p>{character.name} </p>)}</p>
      <div className="item-view-carousel">
        <h1>Images</h1>
        {comic.images.map(image => {
          return <img src={`${image.path}.${image.extension}`} alt="" />
        })}
      </div>
    </div>
  ) : (
    <div className="error">ERROR</div>
  )
}

export default ItemView;