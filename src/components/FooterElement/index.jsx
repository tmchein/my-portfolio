export default function FooterElement({
  url,
  color,
  icon,
  name,
  imgConfig = "",
}) {
  return (
    <a
      href={url}
      className={`${color} flex flex-col items-center rounded-xl p-1 group`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div
        className="absolute -top-10 text-center bg-slate-800 bg-opacity-50 border border-black px-3
       text-white hidden rounded-md group-hover:block"
      >
        {name}
      </div>
      <img src={icon} alt={name} className={`${imgConfig} w-12`} />
    </a>
  );
}
