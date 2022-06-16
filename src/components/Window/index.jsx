export default function Window({ children }) {
  return (
    <div className="mx-auto w-full max-w-3xl border-2 border-gray-900 pb-4 rounded-lg h-full bg-white">
      {children}
    </div>
  );
}
