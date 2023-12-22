import LivestreamHomepageLoadingSingle from "../components/LivestreamHomepageLoadingComponent";
import LivestreamHomepageSingle from "../components/LivestreamHomepageSingle";
import useFetchStreams from "../hooks/useFetchStreams";

export default function StreamsPage() {
  const [streams, isLoading, error] = useFetchStreams();

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <div className="my-8 w-full flex-col items-center px-4">
        <h2 className="w-full border-b-2 pb-8 text-3xl lg:text-4xl">Upcoming livestreams</h2>
        {error && <p>Something went wrong</p>}
        {isLoading && [<LivestreamHomepageLoadingSingle />, <LivestreamHomepageLoadingSingle />, <LivestreamHomepageLoadingSingle />]}
        <div className="">
          {streams.map((stream) => (
            <LivestreamHomepageSingle image={stream.image} name={stream.name} date={stream.date} key={stream._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
