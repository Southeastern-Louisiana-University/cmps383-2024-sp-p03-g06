import { Link, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <div className="navigation">
        <nav>
          <button>swag</button>
          <Link to="/reservations">Cick here to go to reservations</Link>
        </nav>
      </div>
      <hr></hr>
      <Outlet />
    </>
  );
}
