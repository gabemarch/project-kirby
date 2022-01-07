import PacmanLoader from "react-spinners/PacmanLoader";
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <PacmanLoader color={'rgba(255,255,255, 0.7)'} />
    </div>
  )
}

export default Spinner;