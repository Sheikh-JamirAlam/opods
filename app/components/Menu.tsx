export default function Menu() {
  return (
    <nav className="w-full h-screen py-28 px-12 bg-pure-white fixed top-0 right-0 z-50 translate-x-[100%]">
      <ul className="text-4xl font-medium flex flex-col gap-6">
        <li>Overview</li>
        <li>Specs</li>
        <li>Compare</li>
        <li>
          <div className="w-fit px-6 py-2 text-xl text-white rounded-xl bg-light-black cursor-pointer hover:bg-dark-grey transition-all duration-500">Buy now</div>
        </li>
      </ul>
    </nav>
  );
}
