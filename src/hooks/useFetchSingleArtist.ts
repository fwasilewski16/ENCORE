import { useState, useEffect } from "react";
import { Artist, Event } from "../types/types";

interface FetchSingleArtistResult {
  artist: Artist | null;
  isLoading: boolean;
  error: boolean;
  events: Event[];
}

export default function useFetchSingleArtist(artist_id: string | undefined): FetchSingleArtistResult {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);

  if (!artist_id) {
    return { artist: null, isLoading: false, error: true, events: [] };
  }

  useEffect((): void => {
    async function fetchArtist(artist_id: string): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const responseArtist: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/artists/${artist_id}`);
        if (!responseArtist.ok) {
          throw new Error();
        }
        const dataArtist: Artist = await responseArtist.json();
        setArtist(dataArtist);
        const responseEvents: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?artist_id=${artist_id}`);
        if (!responseEvents.ok) {
          throw new Error();
        }
        const dataEvents: Event[] = await responseEvents.json();
        setEvents(dataEvents);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    }
    fetchArtist(artist_id);
  }, [artist_id]);

  return { artist, isLoading, error, events };
}
