import { useEffect, useState } from "react";
import { venues } from "../assets/venues";
import { Event, Artist } from "../types/types";
import { Venue } from "../assets/venues";

interface FetchSingleEventResult {
  eventSingle: Event | null;
  isLoading: boolean;
  error: boolean;
  otherEvents: Event[];
}

export default function useFetchSingleEvent(event_id: string): FetchSingleEventResult {
  const [eventSingle, setEventSingle] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [otherEvents, setOtherEvents] = useState<Event[]>([]);

  useEffect((): void => {
    async function fetchEvent(event_id: string): Promise<void> {
      try {
        setIsLoading(true);
        const responseEvent: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events/${event_id}`);
        if (!responseEvent.ok) {
          throw new Error();
        }
        const event: Event = await responseEvent.json();
        const venue: Venue | undefined = venues.find((venue): boolean => venue.name === event.venue);
        const responseBio: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/artists/${event.artist_id}`);
        if (!responseBio.ok) {
          throw new Error();
        }
        const artist: Artist = await responseBio.json();
        const responseOtherEvents: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?city=All&dateFrom=&dateTo=&artist_id=${event.artist_id}`);
        if (!responseOtherEvents.ok) {
          throw new Error();
        }
        const otherEvents: Event[] = await responseOtherEvents.json();
        if (venue) {
          setEventSingle({ ...event, venue_url: venue.url, venue_address: venue.address, bio: artist.bio });
        }
        setOtherEvents(otherEvents);
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    }

    fetchEvent(event_id);
  }, [event_id]);

  return { eventSingle, isLoading, error, otherEvents };
}
