import { useParams } from "react-router-dom";
import useFetchSingleEvent from "../hooks/useFetchSingleEvent";
import ShowTickets from "../components/ShowTickets";
import EventSingleComponent from "../components/EventSingleComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../store";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function EventSinglePage() {
  const dispatch = useDispatch();

  const eventsList = useSelector((state) => state.account.events);
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const { event_id } = useParams();

  const [eventSingle, isLoading, error, otherEvents] = useFetchSingleEvent(event_id);
  const [revealData, setRevealData] = useState(false);

  const eventSaved = eventsList.map((event) => event.event_id).includes(event_id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setRevealData(false);
  }, [event_id]);

  function scrollToTickets() {
    const element = document.getElementById("tickets-section");
    element.scrollIntoView({ behavior: "smooth" });
  }

  const dateUTC = new Date(eventSingle.date);
  const date_time = `${weekDays[dateUTC.getDay()]} ${dateUTC.getDate()} ${months[dateUTC.getMonth()]} ${dateUTC.getFullYear()} ${dateUTC.getUTCHours() + 1}:${dateUTC.getUTCMinutes()}${new Date(eventSingle.date).getMinutes() === 0 ? "0" : ""}`;

  return (
    <div className="m-auto mt-16 md:mt-20">
      <div className="absolute left-0 right-0 -z-10 hidden h-[660px] overflow-hidden opacity-70 blur-2xl md:block md:h-[450px]">
        <img src={eventSingle.img} className={`min-h-[660px] w-full min-w-[660px] transition duration-1000 ${!revealData && "opacity-0"}`} />
      </div>
      <div className="m-auto min-w-[332px] items-center md:min-h-[368px]">
        <div className="flex flex-col-reverse gap-3 px-4 py-3 md:min-h-0 md:max-w-[900px] md:flex-row md:justify-between">
          <div className="flex w-full flex-col justify-center gap-3 bg-white md:w-1/2 md:items-center md:gap-6 md:rounded-2xl md:bg-opacity-50">
            <h2 className={`h-12 text-5xl ${!revealData && "w-1/2 rounded-md bg-gray-200"}`}>{revealData && eventSingle.artist_name}</h2>
            <p className={`h-7 text-lg font-semibold ${!revealData && "w-1/2 rounded-md bg-gray-200"}`}>{revealData && date_time}</p>
            <p className={`h-7 text-lg ${!revealData && "w-1/2 rounded-md bg-gray-200"}`}>{revealData && eventSingle.venue}</p>
            <div className="flex flex-col items-start gap-4">
              <button
                disabled={!loggedIn}
                onClick={() => {
                  if (!eventSaved) {
                    dispatch(accountActions.addEvent(eventSingle));
                  } else {
                    dispatch(accountActions.removeEvent(eventSingle.event_id));
                  }
                }}
                className={`relative h-10 w-64 overflow-hidden rounded-lg font-semibold text-white transition ${!revealData && "bg-gray-200 text-opacity-0"} ${eventSaved && revealData ? "bg-green-500" : "bg-black"} border-2 disabled:bg-white`}
              >
                {!loggedIn && (
                  <div className={`absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg transition ${!revealData && "opacity-0"}`}>
                    <p className="text-xs text-black">Log in to add to your list</p>
                  </div>
                )}
                {loggedIn && (
                  <div className="flex w-[200%]">
                    <p className={`w-64 transition duration-500 ${eventSaved && "-translate-x-full"}`}>ADD TO MY LIST</p>
                    <p className={`w-64 transition duration-500 ${eventSaved && "-translate-x-full"}`}>REMOVE FROM MY LIST</p>
                  </div>
                )}
              </button>
              <button className={`h-10 w-64 rounded-lg bg-black font-semibold text-white transition ${!revealData && "bg-gray-200 text-opacity-0"}`} onClick={scrollToTickets}>
                BUY TICKETS
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-gray-200 md:w-1/2">
            <img
              src={eventSingle.img}
              onLoad={() => {
                setRevealData(true);
              }}
              width="1000"
              height="1000"
              className={`rounded-3xl transition ${!revealData && "opacity-0"}`}
            />
          </div>
        </div>
      </div>
      <div className="mx-4 mb-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Venue:</h2>
        <div className={`flex flex-col gap-3 bg-gray-100 p-4 ${!revealData && "opacity-0"}`}>
          <p className="h-7 text-lg">
            <span className="font-semibold">{eventSingle.venue}</span> {eventSingle.city}
          </p>
          <p>Address: {eventSingle.venue_address}</p>
          <iframe className={`h-96 min-w-full ${!revealData && "opacity-0"}`} src={eventSingle.venue_url} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="mb-6 px-4 md:max-w-[900px]">
        <h2 className="mb-4 text-2xl font-bold">About the artist:</h2>
        <p className="w-full text-justify leading-6">{eventSingle.bio}</p>
      </div>
      <div id="tickets-section" className="my-6 max-w-full px-4 xl:max-w-[900px]">
        <h2 className="mb-4 text-2xl font-bold">Buy tickets:</h2>
        {eventSingle && eventSingle.ticket_prices && eventSingle.ticket_prices.eventbrite && <ShowTickets website={"EVENTBRITE"} tickets={eventSingle.ticket_prices.eventbrite} />}
        {eventSingle && eventSingle.ticket_prices && eventSingle.ticket_prices.ticketmaster && <ShowTickets website={"TICKETMASTER"} tickets={eventSingle.ticket_prices.ticketmaster} />}
        {eventSingle && eventSingle.ticket_prices && eventSingle.ticket_prices.tickets_center && <ShowTickets website={"TICKETS CENTER"} tickets={eventSingle.ticket_prices.tickets_center} />}
      </div>
      <div className="mb-6 px-4">
        <h2 className="mb-4 text-2xl font-bold">Other concerts by {eventSingle.artist_name}:</h2>
        {otherEvents.length > 0 && otherEvents.map((event) => event.event_id != event_id && <EventSingleComponent name={event.artist_name} event_id={event.event_id} key={event.event_id} date={event.date} img={event.img} venue={event.venue} city={event.city} />)}
      </div>
    </div>
  );
}
