export default function Navbar() {
  return (
    <div className=" bg-stone-800 py-4">
      <div className="wrapper flex items-center gap-2">
        <div className="w-9 h-9 flex justify-center items-center bg-[aqua] rounded-sm">
          <h1 className="text-xl font-bold text-stone-800">P</h1>
        </div>
        <h1 className="font-semibold text-white">Post JSONPlaceholder</h1>
      </div>
    </div>
  );
}
