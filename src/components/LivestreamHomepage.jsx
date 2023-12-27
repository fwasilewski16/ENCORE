import useFetchStreams from "../hooks/useFetchStreams";
import LivestreamHomepageSingle from "./LivestreamHomepageSingle";

export default function LivestreamHomepage() {
  const [streams, isLoading, error] = useFetchStreams();

  return (
    <div className="m-auto my-8 w-full min-w-[332px] max-w-[688px] flex-col items-center px-4 md:mx-auto md:my-36 md:px-0 xl:max-w-[60%]">
      <h2 className="w-full border-b-2 pb-8 text-xl lg:text-4xl">Upcoming livestreams</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className="">
        {streams.map((stream) => (
          <LivestreamHomepageSingle image={stream.image} name={stream.name} date={stream.date} key={stream._id} />
        ))}
      </div>
    </div>
  );
}
