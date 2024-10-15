import EventFilter from "../components/EventFilter";
import AllEvents from "../components/AllEvents";
import { useEffect, useState } from "react";
import { eventsActions } from "../store";
import { useAppDispatch } from "../store/hooks";
import { Event, Filter } from "../types/types";
import useFetchEvents from "../hooks/useFetchEvents";

export default function EventsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>({ city: "All", dateFrom: "", dateTo: "" });
  const [animation, setAnimation] = useState<boolean>(false);

  useFetchEvents({ filter, setEvents, setIsLoading, setError });

  useEffect((): (() => void) => {
    window.scrollTo(0, 0);
    setAnimation(true);
    return () => {
      dispatch(eventsActions.addEvents([]));
    };
  }, []);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <div className={`transition duration-500 ${!animation && "opacity-0"}`}>
        <h2 className="py-6 text-4xl font-extrabold">Browse events</h2>
        <p className="pb-6 transition duration-500">Find tickets to all live music, concerts, tour dates and festivals in and around UK.</p>
        <div className={`min-h-[52px] ${isLoading && "opacity-0"}`}>
          <p className="pb-6">
            Currently there are <span className="inline-block w-[20.5px] text-center text-lg font-semibold">{events.length > 0 && events.length}</span> upcoming events.
          </p>
        </div>
      </div>
      <EventFilter animation={animation} filter={filter} setFilter={setFilter} />
      <AllEvents events={events} isLoading={isLoading} error={error} />
    </div>
  );
}
