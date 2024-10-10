import EventFilter from "../components/EventFilter";
import AllEvents from "../components/AllEvents";
import { useEffect, useState } from "react";
import { eventsActions } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Event } from "../types/types";

export default function EventsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const events: Event[] = useAppSelector((state) => state.events.events);
  const isLoading: boolean = useAppSelector((state) => state.events.isLoading);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect((): (() => void) => {
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
        <div className={`min-h-[52px] transition duration-500 ${isLoading && "opacity-0"}`}>
          <p className="pb-6">
            Currently there are <span className="inline-block w-[20.5px] text-center text-lg font-semibold">{events.length > 0 && events.length}</span> upcoming events.
          </p>
        </div>
      </div>
      <EventFilter animation={animation} />
      <AllEvents />
    </div>
  );
}
