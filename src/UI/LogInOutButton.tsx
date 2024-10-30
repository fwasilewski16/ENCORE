interface LogInOutButtonProps {
  action: string;
  setWindowVisible: React.Dispatch<React.SetStateAction<string>>;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LogInOutButton(props: LogInOutButtonProps): JSX.Element {
  return (
    <li>
      <button
        className="hidden h-9 items-center rounded-full bg-black px-4 font-inter text-white hover:outline hover:outline-[2px] hover:outline-black md:m-4 md:flex xl:m-8"
        onClick={(): void => {
          if (props.action === "Log In") {
            props.setWindowVisible("logInWindow");
            setTimeout(() => {
              props.setAnimation(true);
            }, 1);
          } else if (props.action === "Log Out") {
            props.setWindowVisible("logOutWindow");
            setTimeout(() => {
              props.setAnimation(true);
            }, 1);
          }
        }}
      >
        {props.action}
      </button>
    </li>
  );
}
