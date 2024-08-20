import { Children } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" absolute top-0 left-0 w-full h-16 flex justify-between items-center p-12  z-[999] ">
      <NavHeader />
      <NavLinks />
      <Login type="Login" />
    </nav>
  );
};

const NavHeader = () => {
  return (
    <div>
      <h3 className="font-poppins text-3xl font-semibold text-blush italic tracking-wider ">
        Xeno
        <span className=" font-bold ">Workout</span>
      </h3>
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className="ml-auto mr-40 ">
      <ul className=" flex justify-center items-center gap-2 font-urbanist">
        <List Children={<a href="#">Home</a>}></List>
        <List Children={<a href="#">About</a>}></List>
        <List Children={<a href="#">Contact</a>}></List>
        <hr className="border-b-2 border-b-blush rotate-90 w-10" />
        <List Children={<Link to="/">Exercise</Link>}></List>
      </ul>
    </div>
  );
};

const Login = ({ type }) => {
  return (
    <Link
      to="/login"
      className="font-urbanist text-xl text-blush font-bold  transition-all duration-300 bg-dark-950 px-5 py-2 rounded-3xl hover:bg-[#136a8b] shadow-lg"
    >
      {type}
    </Link>
  );
};

const List = ({ Children }) => {
  return (
    <li className=" px-2 py-1 text-slate-50 font-semibold  transition-all duration-300 backdrop-blur-lg bg-white bg-opacity-5 rounded-xl hover:bg-dark-950">
      {Children}
    </li>
  );
};
export default NavBar;
