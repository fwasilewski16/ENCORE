import { useState, useEffect } from "react";

export default function useFetchArtists(filter) {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArtists(filter) {
      try {
        setIsLoading(true);
        const response = await fetch(`https://portfolio-backend-409515.lm.r.appspot.com/encore/artists?filter=${filter}`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setArtists(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchArtists(filter);
  }, [filter]);
  return [artists, isLoading, error];
}
