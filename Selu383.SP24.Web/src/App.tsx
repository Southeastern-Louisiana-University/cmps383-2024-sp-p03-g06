import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="landing-page" >
      <header>
        <h1>Welcome to Hotel Management Software</h1>
        <p>Streamline your hotel operations with our powerful management solution.</p>
      </header>
      <main>
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Reservation Management</li>
            <li>Room Assignment</li>
            <li>Guest Check-in/Check-out</li>
            <li>Billing and Invoicing</li>
            {/* Add more features as needed */}
          </ul>
        </section>
        <section className="cta">
          <h2>Get Started Today</h2>
          <p>Sign up now and experience the efficiency of our hotel management software.</p>
          <button>Sign Up</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Enstay. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default App
