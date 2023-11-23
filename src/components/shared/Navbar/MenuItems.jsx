import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];
// eslint-disable-next-line react/prop-types
const MenuItems = () => {
  return (
    <ul className="flex  lg:flex-row flex-col">
      {navItems?.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.link}
            className="block py-2 px-3 text-gray-900 font-semibold"
            aria-current="page"
          >
            {item?.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
