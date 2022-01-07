import "./ItemCard.scss";
import { useAPIData } from "../../shared/context/apiContext";
import { NavLink, Outlet } from "react-router-dom";

const ItemCard = () => {
  const data = useAPIData();
  return (
    <>
      {data.map((comic) => (
        <div className="item-card">
          <h3 className="item-card-title">{comic.title}</h3>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt=""
            className="item-card-image"
          />
          <NavLink
            to={`${comic.id}`}
            state={{ comic }}
          >
            See more
          </NavLink>
          <Outlet />
        </div>
      ))}
    </>
  );
};

export default ItemCard;
