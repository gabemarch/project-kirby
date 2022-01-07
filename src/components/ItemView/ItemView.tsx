import { useLocation } from "react-router-dom";

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
    </div>
  ) : (
    <div className="error">ERROR</div>
  )
}

export default ItemView;