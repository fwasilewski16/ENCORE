export default function ArtistSingleLoadingComponent(): JSX.Element {
  return (
    <div className="group flex h-24 min-h-[7rem] w-full justify-between border-b-2 transition duration-200 xl:w-1/2 xl:rounded-xl xl:border-0 xl:hover:shadow-lg">
      <div className="flex xl:pl-4">
        <div className="my-3 h-[88px] w-[88px] rounded-full bg-gray-300 object-cover" />
        <div className="flex flex-col justify-around py-3 pl-12 xl:justify-center xl:gap-3 xl:pl-4">
          <div className="h-4 w-28 rounded-md bg-gray-300" />
          <div className="h-3 w-36 rounded-md bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
