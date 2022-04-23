import { useState } from "react";
import dcLogo from '../../assets/images/dc-logo.png';
import marvelLogo from '../../assets/images/marvel-logo.png';
import imageComics from '../../assets/images/image-logo.png';
import darkHorse from '../../assets/images/dark-horse-logo.png';

import './Publishers.scss';

const Publisher = () => {
  const [publisherData] = useState<string | string[]>(['Marvel', 'DC', 'Image Comics', 'IDW', 'Dark Horse', 'Vertigo']);

  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     setIsLoading(true);

  //     const response = await axios.get("http://localhost:8080/api/publishers");
  //     if (response.status === 200) {
  //       setPublisherData(response.data);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchApi();
  // }, []);

  return (
    <div className="publishers">
      <div className="publishers-images">
        <img className="publishers-images-image" src={dcLogo} alt="" />
        <img className="publishers-images-image" src={marvelLogo} alt="" />
        <img className="publishers-images-image image-comics" src={imageComics} alt="" />
        <img className="publishers-images-image" src={darkHorse} alt="" />
      </div>
    </div>
  )
}

export default Publisher;