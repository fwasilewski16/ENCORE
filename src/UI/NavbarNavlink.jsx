import { NavLink } from "react-router-dom";

export default function NavbarNavlink(props) {
  return (
    <li className="flex h-full items-center">
      <NavLink to={props.to} className={({ isActive }) => `relative hidden h-full w-full flex-col items-center justify-center font-medium tracking-wide transition-all before:absolute before:left-0 before:top-1/3 before:h-px before:w-0 before:bg-black before:transition-all before:duration-500 before:ease-in-out hover:before:w-full md:m-4 md:flex xl:m-8 ${isActive && "before:w-full"}`}>
        {props.function}
      </NavLink>
    </li>
  );
}
