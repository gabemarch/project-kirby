import "./ItemCard.scss";
import { useAPIData } from "../../shared/context/apiContext";
import { NavLink, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";

const ItemCard = () => {
  const data = useAPIData();
  return (
    <div className="item-page">
      {data.map((comic) => (
        <div className="item-card">
          <h3 className="item-card-title">{comic.title}</h3>
          <div className="item-card-image-container">
            <NavLink
              to={`${comic.id}`}
              state={{ comic }}
            >
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt=""
                className="item-card-image"
              />
            </NavLink>
          </div>

          <Button variant="contained" className="item-card-button">
            <NavLink
              to={`${comic.id}`}
              state={{ comic }}
              className="item-card-button-cta"
            >
              See more
            </NavLink>
          </Button>
          <Outlet />
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
