import { useDispatch, useSelector } from "react-redux";
import { eventsActions } from "../store";
import { useEffect } from "react";

export default function useFetchEvents() {
  const dispatch = useDispatch();

  const { city, dateFrom, dateTo } = useSelector((state) => state.events.filter);

  useEffect(() => {
    async function fetchEvents(city, dateFrom, dateTo) {
      try {
        dispatch(eventsActions.isLoadingHandler(true));
        const response = await fetch(`https://3.8.100.175:8080/encore/events?city=${city}&dateFrom=${dateFrom}&dateTo=${dateTo}&artist_id=`);
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        const data = await response.json();
        dispatch(eventsActions.isLoadingHandler(false));
        dispatch(eventsActions.addEvents(data));
      } catch (error) {
        dispatch(eventsActions.isLoadingHandler(false));
        dispatch(eventsActions.errorHandler(error.message));
      }
    }
    fetchEvents(city, dateFrom, dateTo);
  }, [city, dateFrom, dateTo, dispatch]);

  return [city, dateFrom, dateTo];
}
