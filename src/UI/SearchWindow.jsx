import { useState, useEffect } from "react";
import Modal from "./Modal";
import useFetchSearch from "../hooks/useFetchSearch";
import EventSingleLoadingComponent from "../components/EventSingleLoadingComponent";
import EventSingleComponent from "../components/EventSingleComponent";

const loadingArray = [<EventSingleLoadingComponent key={0} />, <EventSingleLoadingComponent key={1} />, <EventSingleLoadingComponent key={2} />, <EventSingleLoadingComponent key={3} />];

export default function SearchWindow() {
  const [filterInput, setFilterInput] = useState("");
  const [filter, setFilter] = useState("");

  const [events, isLoading, error] = useFetchSearch(filter);

  function filterHandler(event) {
    setFilterInput(event.target.value);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setFilter(filterInput);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [filterInput]);

  return (
    <Modal function={"search"}>
      <div className="overflow-hidden rounded-lg bg-white">
        <div className="max-h-[40rem] min-h-[40rem] overflow-y-scroll pl-3 pt-4">
          <input className="mb-6 h-10 w-full rounded-full border-2 border-black pl-4 text-xl font-medium leading-10 placeholder:text-base placeholder:font-normal md:w-[500px]" placeholder="Search artist name or city" onChange={filterHandler} value={filterInput} />
          {filter != "" && (isLoading ? loadingArray : events.map((event) => <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event._id} date={event.date} img={event.img} venue={event.venue} city={event.city} function={"search"} />))}
        </div>
      </div>
    </Modal>
  );
}
