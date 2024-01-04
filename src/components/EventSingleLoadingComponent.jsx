export default function EventSingleLoadingComponent() {
  return (
    <div className="flex min-h-[8rem] w-full animate-pulse justify-between border-b-2">
      <div className="flex">
        <div className="m-auto h-24 w-24 min-w-[96px] rounded-lg bg-gray-300" />
        <div className="flex flex-col justify-around py-3 pl-12">
          <div className="h-4 w-28 rounded-md bg-gray-300" />
          <div className="h-4 w-[80%] rounded-md bg-gray-300 md:w-40" />
          <div className="h-4 w-[45%] rounded-md bg-gray-300 md:w-40" />
        </div>
      </div>
    </div>
  );
}
