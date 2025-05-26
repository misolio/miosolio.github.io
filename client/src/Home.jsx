import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./main.lab1.css";

function Home() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/MyReciepts");
  };

  return (
    <div className="container">
      <header>
        <h1>Fork & Share</h1>
      </header>

      <nav className="navbar">
        <div className="nav-right">
          <Link to="/MyReciepts">My Recipes</Link>
          <Link to="/Categories">Categories</Link>
          <Link to="/Login">Profile</Link>
        </div>
      </nav>

      <main>
        <section className="welcome-section">
          <h2>🍽️ Ласкаво просимо до Fork & Share!</h2>
          <p>
            Це платформа для зберігання, обміну та перегляду кулінарних рецептів.
            Тут ви можете зберігати власні рецепти або надихатися ідеями інших користувачів.
          </p>

          <button onClick={handleCreateClick} className="create-btn">
            Створити новий рецепт
          </button>
        </section>
      </main>

      <footer>© 2025 Fork & Share</footer>
    </div>
  );
}

export default Home;
