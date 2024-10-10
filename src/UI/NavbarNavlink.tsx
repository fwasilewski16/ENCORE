import { NavLink } from "react-router-dom";

interface NavbarNavlinkProps {
  action: string;
  to: string;
}

export default function NavbarNavlink(props: NavbarNavlinkProps): JSX.Element {
  return (
    <li className="flex h-full items-center">
      <NavLink
        to={props.to}
        onClick={(): void => {
          window.scrollTo(0, 0);
          if (props.action === "Browse events" && window.location.pathname === "/ENCORE/events") {
            window.location.reload();
          }
          if (props.action === "Artists" && window.location.pathname === "/ENCORE/artists") {
            window.location.reload();
          }
          if (props.action === "Blog" && window.location.pathname === "/ENCORE/blog") {
            window.location.reload();
          }
          if (props.action === "Live Streams" && window.location.pathname === "/ENCORE/streams") {
            window.location.reload();
          }
        }}
        className={({ isActive }) => `relative hidden h-full w-full flex-col items-center justify-center font-inter font-medium tracking-wide transition-all before:absolute before:left-0 before:top-1/3 before:h-px before:w-0 before:bg-black before:transition-all before:duration-500 before:ease-in-out hover:before:w-full md:m-4 md:flex xl:m-8 ${isActive && "before:w-full"}`}
      >
        {props.action}
      </NavLink>
    </li>
  );
}
