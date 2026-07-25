import { useState } from "react";
import { CartCounterExercise } from "./components/CartCounterExercise";
import { ExerciseNavigation } from "./components/ExerciseNavigation";
import { LikeButtonExercise } from "./components/LikeButtonExercise";
import { LoginStatusExercise } from "./components/LoginStatusExercise";
import { PasswordVisibilityExercise } from "./components/PasswordVisibilityExercise";
import { StudentListExercise } from "./components/StudentListExercise";

const exercises = [
  { id: "like", title: "Like Button", topic: "Number state" },
  { id: "password", title: "Password Visibility", topic: "Boolean state" },
  { id: "login", title: "Login Status", topic: "Conditional rendering" },
  { id: "cart", title: "Cart Counter", topic: "State restrictions" },
  { id: "students", title: "Student List", topic: "Arrays in state" },
];

export function App() {
  // This state controls which exercise is visible without reloading the page.
  const [activeExercise, setActiveExercise] = useState("like");

  const activeIndex = exercises.findIndex(
    (exercise) => exercise.id === activeExercise,
  );

  function selectExercise(exerciseId) {
    const selectedExercise = exercises.find(
      (exercise) => exercise.id === exerciseId,
    );
    console.log("[Practice Lab] Exercise selected:", selectedExercise);
    setActiveExercise(exerciseId);
  }

  return (
    <main className="practice-page">
      <div className="practice-app">
        <header className="page-header">
          <div className="header-copy">
            <p className="eyebrow">React classroom practice</p>
            <h1>State &amp; Events Lab</h1>
            <p>
              Choose an exercise, interact with it, and observe how React state
              updates the interface.
            </p>
          </div>
          <span className="progress-badge">
            Exercise {activeIndex + 1} of {exercises.length}
          </span>
        </header>

        <div className="practice-layout">
          <ExerciseNavigation
            exercises={exercises}
            activeExercise={activeExercise}
            onSelectExercise={selectExercise}
          />

          <article className="exercise-panel">
            {/*
              All components stay mounted so their local state is preserved.
              The hidden attribute keeps only the selected exercise visible.
            */}
            <div hidden={activeExercise !== "like"}>
              <LikeButtonExercise />
            </div>
            <div hidden={activeExercise !== "password"}>
              <PasswordVisibilityExercise />
            </div>
            <div hidden={activeExercise !== "login"}>
              <LoginStatusExercise />
            </div>
            <div hidden={activeExercise !== "cart"}>
              <CartCounterExercise />
            </div>
            <div hidden={activeExercise !== "students"}>
              <StudentListExercise />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
