import useFetchEvents from "../hooks/useFetchEvents";
import { eventsActions } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface EventFilterProps {
  animation: boolean;
}

export default function EventFilter(props: EventFilterProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [city, dateFrom, dateTo]: [city: string, dateFrom: string, dateTo: string] = useFetchEvents();

  function CityButton(props: { city: string }): JSX.Element {
    return (
      <button
        onClick={(): void => {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            dispatch(eventsActions.dateFromHandler(e.target.value));
          }}
        ></input>
        <input
          value={dateTo}
          placeholder="To"
          type="date"
          className="rounded-2xl border-2 border-black px-2 py-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            dispatch(eventsActions.dateToHandler(e.target.value));
          }}
        ></input>
        {(dateFrom != "" || dateTo != "") && (
          <button
            className="px-1 text-sm"
            onClick={(): void => {
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
