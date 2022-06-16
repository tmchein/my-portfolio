import StackTech from "../StackTech";

export default function ListOfTech({ elements }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {elements.map(({ id, name, icon, url }) => (
        <StackTech key={id} name={name} icon={icon} url={url} />
      ))}
    </div>
  );
}
