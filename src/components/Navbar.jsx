import { Link, useLocation } from "react-router-dom";
 
export default function Navbar() {
  const { pathname } = useLocation();
 
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Lauren Jacobs</Link>
      <div className="links">
        {["/", "/about", "/projects", "/contact"].map((path) => {
          const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          return (
            <Link key={path} to={path} className={pathname === path ? "nav-link active" : "nav-link"}>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
