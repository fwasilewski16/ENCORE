import { useState, useEffect } from "react";
import { Event } from "../types/types";

export default function useCountEvents(id: string): number {
  const [numberOfConcerts, setNumberOfConcerts] = useState<number>(0);

  useEffect((): void => {
    async function fetchData(): Promise<void> {
      const response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?city=All&dateFrom=&dateTo=&artist_id=${id}`);
      const data: Event[] = await response.json();
      setNumberOfConcerts(data.length);
    }
    fetchData();
  }, []);

  return numberOfConcerts;
}
