import useFetchStreams from "../hooks/useFetchStreams";
import LivestreamSingle from "./LivestreamSingle";
import { Stream } from "../types/types";

export default function LivestreamHomepage(): JSX.Element {
  const {
    streams,
    isLoading,
    error,
  }: {
    streams: Stream[];
    isLoading: boolean;
    error: boolean;
  } = useFetchStreams();

  return (
    <div className="m-auto my-8 w-full min-w-[332px] max-w-[688px] flex-col items-center px-4 md:mx-auto md:my-36 md:px-0 xl:max-w-[60%]">
      <h2 className="w-full border-b-2 pb-8 text-xl lg:text-4xl">Upcoming livestreams</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className="">
        {streams.map((stream: Stream) => (
          <LivestreamSingle image={stream.image} name={stream.name} date={stream.date} key={stream._id} />
        ))}
      </div>
    </div>
  );
}
