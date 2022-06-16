import SectionTitle from "../SectionTitle";

export default function Section({ title, body, children }) {
  return (
    <div className="mb-8">
      <SectionTitle title={title} />
      {children ? (
        <div>{children}</div>
      ) : (
        <p className="text-justify">{body}</p>
      )}
    </div>
  );
}
