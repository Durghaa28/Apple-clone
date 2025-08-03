import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Tv & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src="logo.png" alt="Logo" className="h-5 w-4 object-contain" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-xs gap-8 items-center">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 font-semibold hover:text-black cursor-pointer"
            >
              {item}
            </li>
          ))}
          <li className="text-base cursor-pointer">
            <FaSearch />
          </li>
          <li className="text-base cursor-pointer">
            <FaShoppingBag />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden text-sm font-medium">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 hover:text-black cursor-pointer border-b pb-2"
            >
              {item}
            </li>
          ))}
          <li className="text-base cursor-pointer flex items-center gap-2">
            <FaSearch /> Search
          </li>
          <li className="text-base cursor-pointer flex items-center gap-2">
            <FaShoppingBag /> Bag
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
