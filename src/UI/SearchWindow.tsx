import { useState, useEffect } from "react";
import Modal from "./Modal";
import useFetchSearch from "../hooks/useFetchSearch";
import EventSingleLoadingComponent from "../components/EventSingleLoadingComponent";
import EventSingleComponent from "../components/EventSingleComponent";
import { Event } from "../types/types";

const loadingArray: JSX.Element[] = [<EventSingleLoadingComponent key={0} />, <EventSingleLoadingComponent key={1} />, <EventSingleLoadingComponent key={2} />, <EventSingleLoadingComponent key={3} />];

export default function SearchWindow(): JSX.Element {
  const [filterInput, setFilterInput] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const [events, isLoading, error]: [events: Event[], isLoading: boolean, error: boolean] = useFetchSearch(filter);

  function filterHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setFilterInput(event.target.value);
  }

  useEffect((): (() => void) => {
    let timer = setTimeout(() => {
      setFilter(filterInput);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [filterInput]);

  return (
    <Modal modalFunction={"search"}>
      <div className="max-h-[450px] overflow-hidden rounded-lg bg-white">
        <div className="max-h-[40rem] min-h-[40rem] overflow-y-scroll px-3 pt-4">
          <input className="mb-6 h-10 w-full rounded-full border-2 border-black px-4 text-xl font-medium leading-10 placeholder:text-base placeholder:font-normal md:w-[500px]" placeholder="Search artist name or city" onChange={filterHandler} value={filterInput} />
          {filter != "" && (isLoading ? loadingArray : events.map((event) => <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event._id} date={event.date} img={event.img} venue={event.venue} city={event.city} function={"search"} />))}
        </div>
      </div>
    </Modal>
  );
}
