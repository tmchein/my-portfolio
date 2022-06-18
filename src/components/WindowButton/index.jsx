const ACTION_COLORS = {
  close: "bg-[#FF605C]",
  minimize: "bg-[#FFBD44]",
  maximize: "bg-[#00CA4E] hover:bg-[#00CA4Ecc]",
};

export default function WindowButton({ action = "close", maximizeFn }) {
  const backgroundColor = ACTION_COLORS[action];
  const handleClick = () => {
    if (action !== "maximize") return;
    if (window.innerWidth < 1024) return;
    maximizeFn(1.425);
  };
  return (
    <button
      className={`${backgroundColor} w-3 h-3 rounded-full`}
      onClick={handleClick}
    ></button>
  );
}
