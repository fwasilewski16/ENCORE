import { useDispatch, useSelector } from "react-redux";
import useFetchEvents from "../hooks/useFetchEvents";
import { eventsActions } from "../store";

export default function EventFilter(props) {
  const dispatch = useDispatch();

  const [city, dateFrom, dateTo] = useFetchEvents();
  const isLoading = useSelector((state) => state.events.isLoading);

  function CityButton(props) {
    return (
      <button
        onClick={() => {
          dispatch(eventsActions.cityHandler(props.city));
        }}
        className={`rounded-2xl border-2 border-black px-2 py-1 ${props.city === city && "bg-black text-white"}`}
      >
        {props.city}
      </button>
    );
  }

  return (
    <div className={`w-full transition duration-500 ${!props.animation && "opacity-0"}`}>
      <p>Filter by city:</p>
      <div className="flex flex-wrap gap-3 py-3">
        <CityButton city={"All"} />
        <CityButton city={"London"} />
        <CityButton city={"Manchester"} />
        <CityButton city={"Birmingham"} />
        <CityButton city={"Glasgow"} />
        <CityButton city={"Liverpool"} />
      </div>
      <p>Filter by date:</p>
      <div className="flex gap-3 py-3">
        <input
          value={dateFrom}
          placeholder="From"
          type="date"
          className="rounded-2xl border-2 border-black px-2 py-1"
          onChange={(e) => {
            dispatch(eventsActions.dateFromHandler(e.target.value));
          }}
        ></input>
        <input
          value={dateTo}
          placeholder="To"
          type="date"
          className="rounded-2xl border-2 border-black px-2 py-1"
          onChange={(e) => {
            dispatch(eventsActions.dateToHandler(e.target.value));
          }}
        ></input>
        {(dateFrom != "" || dateTo != "") && (
          <button
            className="px-1 text-sm"
            onClick={() => {
              dispatch(eventsActions.dateFromHandler(""));
              dispatch(eventsActions.dateToHandler(""));
            }}
          >
            CLEAR
          </button>
        )}
      </div>
    </div>
  );
}
