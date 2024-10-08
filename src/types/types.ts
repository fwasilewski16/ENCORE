export interface Event {
  _id: string;
  artist_id: string;
  city: string;
  date: string;
  event_id: string;
  ticket_prices: {
    eventbrite: string[];
    ticketmaster: string[];
    tickets_center: string[];
  };
  venue: string;
  img: string;
  artist_name: string;
}
