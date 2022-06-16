const ACTION_COLORS = {
  close: "bg-[#FF605C]",
  minimize: "bg-[#FFBD44]",
  maximize: "bg-[#00CA4E]",
};

export default function WindowButton({ action = "close" }) {
  const backgroundColor = ACTION_COLORS[action];
  return <div className={`${backgroundColor} w-3 h-3 rounded-full`}></div>;
}
