import EventSingleComponent from "./EventSingleComponent";
import EventSingleLoadingComponent from "./EventSingleLoadingComponent";
import { useAppSelector } from "../store/hooks";
import { Event } from "../types/types";

export default function AllEvents(): JSX.Element {
  const events: Event[] = useAppSelector((state) => state.events.events);
  const error: boolean = useAppSelector((state) => state.events.error);
  const loading: boolean = useAppSelector((state) => state.events.isLoading);

  return (
    <div className="mb-3">
      {error && <p className="flex h-44 items-center text-xl">{error}</p>}
      {events.length === 0 && !loading && !error && <p className="flex h-44 items-center text-xl">Nothing to display</p>}
      {loading && events.length === 0 && [<EventSingleLoadingComponent key={0} />, <EventSingleLoadingComponent key={1} />, <EventSingleLoadingComponent key={2} />, <EventSingleLoadingComponent key={3} />, <EventSingleLoadingComponent key={4} />]}
      {events.map(
        (event: Event): JSX.Element => (
          <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event._id} date={event.date} img={event.img} venue={event.venue} city={event.city} function={"events"} />
        ),
      )}
    </div>
  );
}
