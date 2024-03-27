import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../features/AuthContext";
import LogoutButton from "../features/Logoutbutton";

export default function NavBar() {
  const authContext = useContext(AuthContext);

  return (
    <nav>
      <Link to="/login">Login</Link>
      {authContext?.user === undefined ? (
        <>Checking user</>
      ) : authContext?.user !== null ? (
        <>
          Current user: {authContext.user.userName} <LogoutButton>Logout</LogoutButton>
        </>
      ) : (
        <>Not logged in</>
      )}
    </nav>
  );
}
