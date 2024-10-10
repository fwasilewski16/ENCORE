import { useState } from "react";
import down from "../assets/icons/down.png";
import add from "../assets/icons/add.png";
import remove from "../assets/icons/remove.png";

interface PricesProps {
  type: string;
  price: string;
  counter: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
}

function Prices(props: PricesProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <div className="flex w-full justify-between ">
        <p className="">{props.type}</p>
        <p className="font-bold">{props.price}</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <button disabled={props.counter === 0 && true} className="h-7 w-7 rounded-md bg-gray-300 transition-all duration-200 hover:bg-gray-400" onClick={props.onClickMinus}>
            <img src={remove} className="m-auto" />
          </button>
          <p className="h-7 w-8 bg-white text-center font-bold">{props.counter}</p>
          <button className="h-7 w-7 rounded-md bg-gray-300 transition-all duration-200 hover:bg-gray-400" onClick={props.onClickPlus}>
            <img src={add} className="m-auto" />
          </button>
        </div>
        <button className={`h-7 rounded-md px-2 text-white transition-all duration-200 ${props.counter != 0 ? "bg-black" : "bg-gray-100"}`}>BUY</button>
      </div>
    </div>
  );
}

interface ShowTicketsProps {
  website: string;
  tickets: string[];
}

export default function ShowTickets(props: ShowTicketsProps): JSX.Element {
  const [generalAdmissionPrice, goldenCirclePrice, vipPrice]: string[] = props.tickets;
  const [gaCounter, setGaCounter] = useState<number>(0);
  const [gsCounter, setGsCounter] = useState<number>(0);
  const [vipCounter, setVipCounter] = useState<number>(0);

  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="flex max-w-full flex-col">
      <button
        className={`mb-3 flex h-16 max-w-full items-center justify-between rounded-lg border-2 px-4 transition duration-500 ${expand && "shadow-lg"}`}
        onClick={(): void => {
          setExpand((prevState) => !prevState);
          setGaCounter(0);
          setGsCounter(0);
          setVipCounter(0);
        }}
      >
        <h2 className="text-xl font-semibold">{props.website}</h2>
        <img src={down} className={`transition duration-500 ${expand && "rotate-180"}`} />
      </button>
      <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 md:px-4 ${expand ? "h-[228px] sm:h-[120px]" : "h-0"}`}>
        <Prices
          type={"General Admission"}
          price={generalAdmissionPrice}
          counter={gaCounter}
          onClickMinus={(): void => {
            setGsCounter(0);
            setVipCounter(0);
            setGaCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
          }}
          onClickPlus={(): void => {
            setGsCounter(0);
            setVipCounter(0);
            setGaCounter((prevCounter) => prevCounter + 1);
          }}
        />
        <Prices
          type={"Golden Circle"}
          price={goldenCirclePrice}
          counter={gsCounter}
          onClickMinus={(): void => {
            setGaCounter(0);
            setVipCounter(0);
            setGsCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
          }}
          onClickPlus={(): void => {
            setGaCounter(0);
            setVipCounter(0);
            setGsCounter((prevCounter) => prevCounter + 1);
          }}
        />
        <Prices
          type={"VIP"}
          price={vipPrice}
          counter={vipCounter}
          onClickMinus={(): void => {
            setGaCounter(0);
            setGsCounter(0);
            setVipCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
          }}
          onClickPlus={(): void => {
            setGaCounter(0);
            setGsCounter(0);
            setVipCounter((prevCounter) => prevCounter + 1);
          }}
        />
      </div>
    </div>
  );
}
