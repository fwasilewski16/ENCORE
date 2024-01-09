import { useState, useEffect } from "react";

export default function useCountEvents(id) {
  const [numberOfConcerts, setNumberOfConcerts] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?city=All&dateFrom=&dateTo=&artist_id=${id}`);
      const data = await response.json();
      setNumberOfConcerts(data.length);
    }
    fetchData();
  }, []);

  return numberOfConcerts;
}
