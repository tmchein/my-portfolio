import WindowButton from "../WindowButton";

export default function WindowHeader({ children, setMaximized }) {
  return (
    <header
      className="h-8 bg-gray-900 w-full flex items-center px-2
    justify-between  cursor-default lg:cursor-pointer"
    >
      <div className="flex gap-x-2">
        <WindowButton action="close" />
        <WindowButton action="minimize" />
        <WindowButton action="maximize" maximizeFn={setMaximized} />
      </div>
      {children}
    </header>
  );
}
