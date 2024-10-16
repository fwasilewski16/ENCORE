import { useState, useEffect } from "react";
import { Artist } from "../types/types";

export default function useFetchArtists(filter: string): [artists: Artist[], isLoading: boolean, error: boolean] {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect((): void => {
    async function fetchArtists(filter: string): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const response: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/artists?filter=${filter}`);
        if (!response.ok) {
          throw new Error();
        }
        const data: Artist[] = await response.json();
        setArtists(data);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    }
    fetchArtists(filter);
  }, [filter]);

  return [artists, isLoading, error];
}
