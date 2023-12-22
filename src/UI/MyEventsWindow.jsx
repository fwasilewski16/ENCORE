import { useSelector } from "react-redux";
import Modal from "./Modal";
import EventSingleComponent from "../components/EventSingleComponent";

export default function MyEventsWindow() {
  const events = useSelector((state) => state.account.events);

  return (
    <Modal function={"events"}>
      <div className="max-h-[40rem] min-h-[40rem] w-full rounded-lg bg-white p-3 md:w-[500px]">
        <h2 className="text-2xl font-medium">My events:</h2>
        {events.length != 0 ? events.map((event) => <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event._id} date={event.date} img={event.img} venue={event.venue} city={event.city} function="events" />) : <p className="mt-4">Nothing to see here</p>}
      </div>
    </Modal>
  );
}
