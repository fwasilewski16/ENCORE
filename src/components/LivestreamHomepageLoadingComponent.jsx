export default function LivestreamHomepageLoadingSingle(props) {
  return (
    <div className="flex h-24 min-h-[8rem] w-full justify-between border-b-2">
      <div className="flex flex-col justify-around py-3">
        <div className="h-4 w-28 rounded-md bg-gray-300" />
        <div className="h-4 w-44 rounded-md bg-gray-300" />
        <div className="h-4 w-36 rounded-md bg-gray-300" />
      </div>
      <div className="my-auto h-24 w-24 overflow-hidden rounded-lg bg-gray-300" />
    </div>
  );
}
