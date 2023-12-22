import { useState } from "react";
import down from "../assets/icons/down.png";
import add from "../assets/icons/add.png";
import remove from "../assets/icons/remove.png";

function Prices(props) {
  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <div className="flex w-full justify-between ">
        <p className="">{props.type}</p>
        <p className="font-bold">{props.price}</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <button disabled={props.counter === 0 && true} className="h-7 w-9 bg-gray-300 transition-all duration-75 hover:bg-gray-400" onClick={props.onClickMinus}>
            <img src={remove} className="m-auto" />
          </button>
          <p className="h-7 w-8 bg-white text-center font-bold">{props.counter}</p>
          <button className="h-7 w-9 bg-gray-300 transition-all duration-75 hover:bg-gray-400" onClick={props.onClickPlus}>
            <img src={add} className="m-auto" />
          </button>
        </div>
        <button className={`h-7 px-2 text-white transition-all ${props.counter != 0 ? "bg-black" : "bg-gray-100"}`}>ADD TO BASKET</button>
      </div>
    </div>
  );
}

export default function ShowTickets(props) {
  const [generalAdmissionPrice, goldenCirclePrice, vipPrice] = props.tickets;
  const [gaCounter, setGaCounter] = useState(0);
  const [gsCounter, setGsCounter] = useState(0);
  const [vipCounter, setVipCounter] = useState(0);

  const [expand, setExpand] = useState("");

  return (
    <div className="flex max-w-full flex-col">
      <button
        className="mb-3 flex h-16 max-w-full items-center justify-between border-2 px-2 shadow-md"
        onClick={() => {
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
          expand={expand}
          counter={gaCounter}
          onClickMinus={() => {
            setGsCounter(0);
            setVipCounter(0);
            setGaCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
          }}
          onClickPlus={() => {
            setGsCounter(0);
            setVipCounter(0);
            setGaCounter((prevCounter) => prevCounter + 1);
          }}
        />
        <Prices
          type={"Golden Circle"}
          price={goldenCirclePrice}
          expand={expand}
          counter={gsCounter}
          onClickMinus={() => {
            setGaCounter(0);
            setVipCounter(0);
            setGsCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
          }}
          onClickPlus={() => {
            setGaCounter(0);
            setVipCounter(0);
            setGsCounter((prevCounter) => prevCounter + 1);
          }}
        />
        <Prices
          type={"VIP"}
          price={vipPrice}
          expand={expand}
          counter={vipCounter}
          onClickMinus={() => {
            setGaCounter(0);
            setGsCounter(0);
            setVipCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
          }}
          onClickPlus={() => {
            setGaCounter(0);
            setGsCounter(0);
            setVipCounter((prevCounter) => prevCounter + 1);
          }}
        />
      </div>
    </div>
  );
}
