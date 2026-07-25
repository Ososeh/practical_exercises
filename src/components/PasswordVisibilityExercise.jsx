import { useState } from "react";
import { ExerciseHeader } from "./ExerciseHeader";

export function PasswordVisibilityExercise() {
  // String and boolean state control the input value and its visibility.
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    console.log(
      "[Password Visibility] Password is now:",
      isPasswordVisible ? "hidden" : "visible",
    );
    setIsPasswordVisible((previousVisibility) => !previousVisibility);
  }

  return (
    <>
      <ExerciseHeader
        number={2}
        title="Password Visibility"
        description="Use boolean state to switch an input between password and text while updating the button label."
      />
      <div className="exercise-content">
        <section className="demo-card" aria-labelledby="password-demo-title">
          <h3 id="password-demo-title">Secure password field</h3>
          <p className="demo-description">
            Type a password, then choose whether it should be visible.
          </p>

          <label className="field-label" htmlFor="practice-password">
            Password
          </label>
          <div className="password-field">
            {/* React controls both the input type and its current value. */}
            <input
              id="practice-password"
              className="text-input"
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            <button
              className="secondary-button password-toggle"
              type="button"
              onClick={togglePasswordVisibility}
              aria-pressed={isPasswordVisible}
            >
              {isPasswordVisible ? "Hide Password" : "Show Password"}
            </button>
          </div>
          <p className="field-hint">
            The button changes the input type without changing what you typed.
          </p>
        </section>
      </div>
    </>
  );
}
