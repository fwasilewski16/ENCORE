import { useState, useEffect } from "react";

export default function useFetchSingleArtist(artist_id) {
  const [artist, setArtist] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchArtist(artist_id) {
      try {
        setIsLoading(true);
        const responseArtist = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/artists/${artist_id}`);
        const dataArtist = await responseArtist.json();
        setArtist(dataArtist);
        const responseEvents = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?artist_id=${artist_id}`);
        const dataEvents = await responseEvents.json();
        setEvents(dataEvents);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchArtist(artist_id);
  }, [artist_id]);

  return [artist, isLoading, error, events];
}
