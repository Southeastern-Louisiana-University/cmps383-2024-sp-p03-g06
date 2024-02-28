import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-page">
        <header>
          <h1>Welcome to Enstay</h1>
          
        </header>
        <main>
          <section className="features">
            <h2>Key Features (Coming Soon!)</h2>
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
          <h2>Get Started on Your Dream Stay Today</h2>
          <p>Sign up now</p>
          <button>Sign Up</button>
          {" "}
          <button onClick={() => navigate("/login")}>Login</button>
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
