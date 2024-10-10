import { useEffect, useState } from "react";
import { Event } from "../types/types";

export default function useFetchSearch(filter: string): [events: Event[], isLoading: boolean, error: boolean] {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect((): void => {
    async function fetchData(filter: string) {
      setIsLoading(true);
      try {
        const response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events/search?filter=${filter}`);
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
