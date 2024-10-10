import { eventsActions } from "../store";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Event } from "../types/types";

export default function useFetchEvents(): [city: string, dateFrom: string, dateTo: string] {
  const dispatch = useAppDispatch();

  const { city, dateFrom, dateTo }: { city: string; dateFrom: string; dateTo: string } = useAppSelector((state) => state.events.filter);

  useEffect((): void => {
    async function fetchEvents(city: string, dateFrom: string, dateTo: string): Promise<void> {
      try {
        dispatch(eventsActions.isLoadingHandler(true));
        const response: Response = await fetch(`https://backend-portfolio-wasilewski.fly.dev/encore/events?city=${city}&dateFrom=${dateFrom}&dateTo=${dateTo}&artist_id=`);
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        const data: Event[] = await response.json();
        dispatch(eventsActions.isLoadingHandler(false));
        dispatch(eventsActions.addEvents(data));
      } catch (error) {
        dispatch(eventsActions.isLoadingHandler(false));
        dispatch(eventsActions.errorHandler(true));
      }
    }
    fetchEvents(city, dateFrom, dateTo);
  }, [city, dateFrom, dateTo, dispatch]);

  return [city, dateFrom, dateTo];
}
