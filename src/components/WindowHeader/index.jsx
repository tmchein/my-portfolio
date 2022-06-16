import WindowButton from "../WindowButton";

export default function WindowHeader({ children }) {
  return (
    <header className="h-8 bg-gray-900 w-full flex items-center px-2 justify-between">
      <div className="flex gap-x-2">
        <WindowButton action="close" />
        <WindowButton action="minimize" />
        <WindowButton action="maximize" />
      </div>
      {children}
    </header>
  );
}
