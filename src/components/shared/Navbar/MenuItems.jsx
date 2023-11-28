import { NavLink } from "react-router-dom";
import SignOutBtn from "../Sidebar/SignOutBtn";
import useAuth from "../../../hooks/useAuth";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Surveys",
    link: "/dashboard/surveys",
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
  const { user } = useAuth();
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
      {user && (
        <li className="lg:hidden">
          <SignOutBtn />
        </li>
      )}
    </ul>
  );
};

export default MenuItems;
