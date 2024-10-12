import { useEffect, useState } from "react";
import { Event } from "../types/types";

export default function useFetchSearch(filter: string): [events: Event[], isLoading: boolean, error: boolean] {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect((): void => {
    if (filter === "") {
      setEvents([]);
      setError(false);
      return;
    }
    async function fetchData(filter: string) {
      setError(false);
      setIsLoading(true);
      try {
        const response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events/search?filter=${filter}`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 750);
      }
    }

    fetchData(filter);
  }, [filter]);

  return [events, isLoading, error];
}
