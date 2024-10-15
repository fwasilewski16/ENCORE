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
  venue_url?: string;
  venue_address?: string;
  bio?: string;
}

export interface Artist {
  _id: string;
  bio: string;
  artist_id: string;
  img: string;
  name: string;
}

export interface Stream {
  _id: string;
  date: string;
  artist_id: string;
  image: string;
  name: string;
}

export interface Filter {
  city: string;
  dateFrom: string;
  dateTo: string;
}
