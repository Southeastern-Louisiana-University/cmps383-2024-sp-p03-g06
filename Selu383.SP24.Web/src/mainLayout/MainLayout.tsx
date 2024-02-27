import { Outlet, useNavigate } from "react-router-dom";

export function MainLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navigation">
        <nav>
          <button>swag</button>
          <button onClick={() => navigate("/reservations")}>
            Reservations
          </button>
        </nav>
      </div>
      <hr></hr>
      <Outlet />
    </>
  );
}
