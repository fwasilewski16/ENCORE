import { useEffect, useState } from "react";

export default function useFetchStreams() {
  const [streams, setStreams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStreams() {
      try {
        setIsLoading(true);
        const response = await fetch("https://portfolio-backend-409515.lm.r.appspot.com/encore/streams");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStreams(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    }

    fetchStreams();
  }, []);

  return [streams, isLoading, error];
}
