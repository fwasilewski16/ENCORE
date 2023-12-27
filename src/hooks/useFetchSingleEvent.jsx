import { useEffect, useState } from "react";
import { venues } from "../assets/venues";

export default function useFetchSingleEvent(event_id) {
  const [eventSingle, setEventSingle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [otherEvents, setOtherEvents] = useState([]);

  useEffect(() => {
    async function fetchEvent(event_id) {
      try {
        setIsLoading(true);
        const responseEvent = await fetch(`https://3.8.100.175:443/encore/events/${event_id}`);
        if (!responseEvent.ok) {
          throw new Error();
        }
        const event = await responseEvent.json();
        const venue = venues.find((venue) => venue.name === event.venue);
        const responseBio = await fetch(`https://3.8.100.175:443/encore/artists/${event.artist_id}`);
        if (!responseBio.ok) {
          throw new Error();
        }
        const artist = await responseBio.json();
        const responseOtherEvents = await fetch(`https://3.8.100.175:443/encore/events?city=All&dateFrom=&dateTo=&artist_id=${event.artist_id}`);
        if (!responseOtherEvents.ok) {
          throw new Error();
        }
        const otherEvents = await responseOtherEvents.json();
        setEventSingle({ ...event, venue_url: venue.url, venue_address: venue.address, bio: artist.bio });
        setOtherEvents(otherEvents);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    fetchEvent(event_id);
  }, [event_id]);

  return [eventSingle, isLoading, error, otherEvents];
}
