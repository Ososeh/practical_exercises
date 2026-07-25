// This shared heading prevents repeated introductory markup in every exercise.
export function ExerciseHeader({ number, title, description }) {
  return (
    <header className="exercise-heading">
      <p className="exercise-label">Exercise {number}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}
