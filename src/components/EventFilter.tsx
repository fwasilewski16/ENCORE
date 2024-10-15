import { Filter } from "../types/types";

const cities: string[] = ["All", "London", "Manchester", "Birmingham", "Glasgow", "Liverpool"];

interface CityButtonParams {
  city: string;
  currentCity: boolean;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

function CityButton(props: CityButtonParams): JSX.Element {
  return (
    <button
      onClick={(): void => {
        props.setFilter((prevFilter) => {
          return { ...prevFilter, city: props.city };
        });
      }}
      className={`rounded-2xl border-2 border-black px-2 py-1 ${props.currentCity && "bg-black text-white"}`}
    >
      {props.city}
    </button>
  );
}

interface EventFilterProps {
  animation: boolean;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export default function EventFilter(props: EventFilterProps): JSX.Element {
  return (
    <div className={`w-full transition duration-500 ${!props.animation && "opacity-0"}`}>
      <p>Filter by city:</p>
      <div className="flex flex-wrap gap-3 py-3">
        {cities.map((city: string, index: number) => (
          <CityButton key={index} city={city} currentCity={props.filter.city === city} setFilter={props.setFilter} />
        ))}
      </div>
      <p>Filter by date:</p>
      <div className="flex gap-3 py-3">
        <input
          value={props.filter.dateFrom}
          placeholder="From"
          type="date"
          className="rounded-2xl border-2 border-black px-2 py-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            props.setFilter((prevFilter) => {
              return { ...prevFilter, dateFrom: e.target.value };
            });
          }}
        ></input>
        <input
          value={props.filter.dateTo}
          placeholder="To"
          type="date"
          className="rounded-2xl border-2 border-black px-2 py-1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            props.setFilter((prevFilter) => {
              return { ...prevFilter, dateTo: e.target.value };
            });
          }}
        ></input>
        {(props.filter.dateFrom != "" || props.filter.dateTo != "") && (
          <button
            className="px-1 text-sm"
            onClick={(): void => {
              props.setFilter((prevFilter) => {
                return { ...prevFilter, dateFrom: "", dateTo: "" };
              });
            }}
          >
            CLEAR
          </button>
        )}
      </div>
    </div>
  );
}
