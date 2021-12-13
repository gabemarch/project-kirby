import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const BASE_URL = "https://gateway.marvel.com";
const key = "d20d6e74fa3c8c96dc20ecdfbf119215";

const APIContext = createContext();

export function useAPIData() {
  return useContext(APIContext);
}

export function APIProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);

      const response = await axios.get(
        `${BASE_URL}/v1/public/comics?apikey=${key}`
      );
      setData(response.data.data.results);
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  console.log(data);

  return <APIContext.Provider value={data}>{children}</APIContext.Provider>;
}
