import EventFilter from "../components/EventFilter";
import AllEvents from "../components/AllEvents";
import { useSelector } from "react-redux";

export default function EventsPage() {
  const events = useSelector((state) => state.events.events);
  const isLoading = useSelector((state) => state.events.isLoading);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <div>
        <h2 className="py-6 text-4xl font-extrabold">Browse events</h2>
        <p className="pb-6">Find tickets to all live music, concerts, tour dates and festivals in and around UK.</p>
        <div className="min-h-[52px]">
          {!isLoading && (
            <p className="pb-6">
              Currently there are <span className="inline-block w-[20.5px] text-center text-lg font-semibold">{events.length > 0 && events.length}</span> upcoming events.
            </p>
          )}
        </div>
      </div>
      <EventFilter />
      <AllEvents />
    </div>
  );
}
