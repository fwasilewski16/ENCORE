import { useSelector } from "react-redux";
import EventSingleComponent from "./EventSingleComponent";
import EventSingleLoadingComponent from "./EventSingleLoadingComponent";

export default function AllEvents() {
  const events = useSelector((state) => state.events.events);
  const error = useSelector((state) => state.events.error);
  const loading = useSelector((state) => state.events.isLoading);

  return (
    <div className="mb-3">
      {error && <p className="flex h-44 items-center text-xl">{error}</p>}
      {events.length === 0 && !loading && !error && <p className="flex h-44 items-center text-xl">Nothing to display</p>}
      {loading && events.length === 0 && [<EventSingleLoadingComponent key={0} />, <EventSingleLoadingComponent key={1} />, <EventSingleLoadingComponent key={2} />, <EventSingleLoadingComponent key={3} />, <EventSingleLoadingComponent key={4} />]}
      {events.map((event) => (
        <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event._id} date={event.date} img={event.img} venue={event.venue} city={event.city} />
      ))}
    </div>
  );
}
