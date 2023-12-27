import { useEffect, useState } from "react";

export default function useFetchSearch(filter) {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData(filter) {
      setIsLoading(true);
      try {
        const response = await fetch(`https://3.8.100.175:443/encore/events/search?filter=${filter}`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setEvents(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    fetchData(filter);
  }, [filter]);

  return [events, isLoading, error];
}
