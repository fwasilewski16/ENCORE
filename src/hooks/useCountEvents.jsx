import { useState, useEffect } from "react";

export default function useCountEvents(id) {
  const [numberOfConcerts, setNumberOfConcerts] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://portfolio-backend-409515.lm.r.appspot.com/encore/events?city=All&dateFrom=&dateTo=&artist_id=${id}`);
      const data = await response.json();
      setNumberOfConcerts(data.length);
    }
    fetchData();
  }, []);

  return numberOfConcerts;
}
