import ReactDOM from "react-dom";

interface BackdropProps {
  animation: boolean;
  exitHandler: () => void;
}

function Backdrop(props: BackdropProps): JSX.Element {
  return <div className={`fixed left-0 right-0 top-0 z-40 h-full bg-black transition duration-500 ${props.animation ? "opacity-80" : "opacity-0"}`} onClick={props.exitHandler} />;
}

interface ContentProps {
  children: JSX.Element;
  animation: boolean;
}

function Content(props: ContentProps): JSX.Element {
  return <div className={`fixed left-2/4 top-2/4 z-50 w-4/5 -translate-x-1/2 -translate-y-1/2 transition duration-500 md:w-auto ${props.animation ? "opacity-100" : "opacity-0"}`}>{props.children}</div>;
}

interface ModalProps {
  children: JSX.Element;
  animation: boolean;
  exitHandler: () => void;
}

export default function Modal(props: ModalProps): JSX.Element {
  const overlayElement: HTMLElement | null = document.getElementById("overlays");

  return (
    <>
      {overlayElement && ReactDOM.createPortal(<Backdrop animation={props.animation} exitHandler={props.exitHandler} />, overlayElement)}
      {overlayElement && ReactDOM.createPortal(<Content animation={props.animation}>{props.children}</Content>, overlayElement)}
    </>
  );
}
