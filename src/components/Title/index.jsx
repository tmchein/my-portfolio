const SIZES = {
  small: "text-2xl",
  medium: "text-3xl",
  large: "text-5xl",
};

export default function Title({ content, color, size, alignLeft }) {
  const titleSize = SIZES[size] || SIZES.large;
  const alignment = alignLeft ? "text-left" : "text-center";
  return (
    <div
      className={`${titleSize} font-bold uppercase ${color} ${alignment} w-fit`}
    >
      {content}
    </div>
  );
}
