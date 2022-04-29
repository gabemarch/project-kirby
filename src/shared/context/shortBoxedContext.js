import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const BASE_URL = "https://api.shortboxed.com";

const ShortBoxedAPIContext = createContext();

export function useShortBoxedAPIData() {
  return useContext(ShortBoxedAPIContext);
}

export function ShortBoxedAPIProvider({children}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);

      const response = await axios.get(
        `${BASE_URL}/comics/v1/new`
      );
      console.log(response)
      // setData(response.data);
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  console.log(data);

  return <ShortBoxedAPIContext.Provider value={data}>{children}</ShortBoxedAPIContext.Provider>;
}