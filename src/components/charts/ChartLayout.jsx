export default function ChartLayout({ children }) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm mx-2">
      {" "}
      {children}
      <div className="p-6 px-6 pt-0">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
          Lorem ipsum dolor sit.
        </h6>
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          quae!
        </p>
      </div>
    </div>
  );
}
