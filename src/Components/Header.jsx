import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContxt } from "../Contexts/AuthContext";

function Header() {
  const { current } = useContext(AuthContxt);

  return (
    <div>
      {
      Object.keys(current).length ? (
        <div className="flex gap-10 items-center justify-center m-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/friends"}>Friends</Link>
        </div>
      ) : (
        <div className="flex gap-10 items-center justify-center m-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/register"}>Sign Up</Link>
          <Link to={"/friends"}>Friends</Link>
          <Link to={"/login"}>Log In</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
