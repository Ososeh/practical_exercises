export function ExerciseNavigation({
  exercises,
  activeExercise,
  onSelectExercise,
}) {
  return (
    <nav className="exercise-nav" aria-label="Practical exercises">
      <p className="nav-heading">Choose an exercise</p>
      <ol className="nav-list">
        {/* map() converts the exercise data into five navigation buttons. */}
        {exercises.map((exercise, index) => {
          const isActive = activeExercise === exercise.id;

          return (
            <li key={exercise.id}>
              <button
                className={`exercise-tab ${isActive ? "active" : ""}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelectExercise(exercise.id)}
              >
                <span className="tab-number">{index + 1}</span>
                <span className="tab-copy">
                  <strong>{exercise.title}</strong>
                  <span>{exercise.topic}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
