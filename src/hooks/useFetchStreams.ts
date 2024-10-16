import { useEffect, useState } from "react";
import { Stream } from "../types/types";

interface FetchStreamsResults {
  streams: Stream[];
  isLoading: boolean;
  error: boolean;
}

export default function useFetchStreams(): FetchStreamsResults {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect((): void => {
    async function fetchStreams(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const response: Response = await fetch("https://backend-portfolio-wasilewski.fly.dev/encore/streams");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Stream[] = await response.json();
        setStreams(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    }

    fetchStreams();
  }, []);

  return { streams, isLoading, error };
}
