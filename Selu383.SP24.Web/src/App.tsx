import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-page">
        <header>
          <h1>Welcome to Hotel Management Software</h1>
          <p>
            Streamline your hotel operations with our powerful management
            solution.
          </p>
        </header>
        <main>
          <section className="features">
            <h2>Key Features</h2>
<ul>
            <p>Reservation Management</p>
            <p>Room Assignment</p>
            <p>Guest Check-in/Check-out</p>
            <p>Billing and Invoicing</p>
            {/* Add more features as needed */}
          </ul>
        </section>
        </main>
        <main>
        <section className="cta">
          <h2>Get Started Today</h2>
          <p>Sign up now and experience the efficiency of our hotel management software.</p>
          <button>Sign Up</button>
          {" "}
          <button onClick={() => navigate("/login")}>LogIn</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Enstay. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default App;
