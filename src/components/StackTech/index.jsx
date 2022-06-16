export default function StackTech({ name, icon, url }) {
  return (
    <div className="flex justify-center items-center border-2 border-gray-300 rounded-md w-fit px-2 gap-4">
      {url ? (
        <>
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-2 items-center p-2"
          >
            <img className="w-6" src={icon} alt={name} />
            <p>{name}</p>
          </a>
        </>
      ) : (
        <>
          <img className="w-8" src={icon} alt={name} />
          <p>{name}</p>
        </>
      )}
    </div>
  );
}
