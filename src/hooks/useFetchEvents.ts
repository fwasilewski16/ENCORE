import { useEffect } from "react";
import { Event } from "../types/types";

interface FetchEventsParams {
  filter: { city: string; dateFrom: string; dateTo: string };
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useFetchEvents({ filter, setEvents, setIsLoading, setError }: FetchEventsParams) {
  useEffect((): void => {
    async function fetchEvents(city: string, dateFrom: string, dateTo: string): Promise<void> {
      try {
        setIsLoading(true);
        const response: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?city=${city}&dateFrom=${dateFrom}&dateTo=${dateTo}&artist_id=`);
        if (!response.ok) {
          throw Error();
        }
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    }
    fetchEvents(filter.city, filter.dateFrom, filter.dateTo);
  }, [filter, setEvents, setIsLoading, setError]);
}
