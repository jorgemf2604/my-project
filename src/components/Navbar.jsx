import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <h1>Northcoders News</h1>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Articles</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
 
export default Navbar;