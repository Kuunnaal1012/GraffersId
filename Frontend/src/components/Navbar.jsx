import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <nav className="flex justify-around items-center p-4  shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-600 px-3 py-1 rounded-full m-auto">
            <span className="text-white text-1xl font-bold">★</span>
          </div>
          <h1 className="text-xl font-semibold ml-2">
            Review<span className="text-purple-600">&RATE</span>
          </h1>
        </div>
        <div className="flex items-center space-x-10 ">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-10 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <FaSearch className="absolute right-3 top-3 text-purple-600" />
        </div>
       
          <button className="text-black font-medium cursor-pointer">SignUp</button>
          <button className="text-black font-medium cursor-pointer">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
