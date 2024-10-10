import { useEffect, useState } from "react";
import { Stream } from "../types/types";

export default function useFetchStreams(): [Stream[], boolean, boolean] {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchStreams(): Promise<void> {
      try {
        setIsLoading(true);
        const response = await fetch("https://backend-portfolio-wasilewski.fly.dev/encore/streams");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Stream[] = await response.json();
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
