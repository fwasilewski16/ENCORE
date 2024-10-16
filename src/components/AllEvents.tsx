import EventSingleComponent from "./EventSingleComponent";
import EventSingleLoadingComponent from "./EventSingleLoadingComponent";
import { Event } from "../types/types";

interface AllEventsProps {
  events: Event[];
  isLoading: boolean;
  error: boolean;
}

export default function AllEvents(props: AllEventsProps): JSX.Element {
  return (
    <div className="mb-3">
      {props.error && <p className="flex h-44 items-center text-xl">Something went wrong</p>}
      {props.events.length === 0 && !props.isLoading && !props.error && <p className="flex h-44 items-center text-xl">Nothing to display</p>}
      {props.isLoading && [<EventSingleLoadingComponent key={0} />, <EventSingleLoadingComponent key={1} />, <EventSingleLoadingComponent key={2} />, <EventSingleLoadingComponent key={3} />, <EventSingleLoadingComponent key={4} />]}
      {!props.isLoading && props.events.map((event: Event): JSX.Element => <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event._id} date={event.date} img={event.img} venue={event.venue} city={event.city} />)}
    </div>
  );
}
