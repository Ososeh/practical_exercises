import { useState } from "react";
import { ExerciseHeader } from "./ExerciseHeader";

export function LoginStatusExercise() {
  // One boolean controls the message, badge, button label, and button colour.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLoginStatus() {
    console.log(
      "[Login Status] User is now:",
      isLoggedIn ? "logged out" : "logged in",
    );
    setIsLoggedIn((previousStatus) => !previousStatus);
  }

  return (
    <>
      <ExerciseHeader
        number={3}
        title="Login Status"
        description="Practise conditional rendering by switching the complete interface between logged-out and logged-in states."
      />
      <div className="exercise-content">
        <section className="demo-card status-card" aria-labelledby="login-message">
          <span
            className={`status-indicator ${isLoggedIn ? "logged-in" : ""}`}
          >
            {isLoggedIn ? "Logged in" : "Logged out"}
          </span>
          <h3 id="login-message" className="status-message" aria-live="polite">
            {isLoggedIn ? "Welcome back" : "Please log in"}
          </h3>
          <button
            className={isLoggedIn ? "danger-button" : "primary-button"}
            type="button"
            onClick={toggleLoginStatus}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </section>
      </div>
    </>
  );
}
