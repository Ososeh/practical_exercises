import { useState } from "react";
import { ExerciseHeader } from "./ExerciseHeader";

export function LikeButtonExercise() {
  // Number state stores a value that changes whenever the button is clicked.
  const [likes, setLikes] = useState(0);

  function handleLike() {
    console.log("[Like Button] Like count:", likes + 1);
    // The callback form uses the latest value when calculating the next state.
    setLikes((previousLikes) => previousLikes + 1);
  }

  return (
    <>
      <ExerciseHeader
        number={1}
        title="Like Button"
        description="Practise number state, click events, functional updates, and conditional button text."
      />
      <div className="exercise-content">
        <section className="demo-card like-demo" aria-labelledby="like-demo-title">
          <div className="like-icon" aria-hidden="true">
            ♥
          </div>
          <h3 id="like-demo-title">Did you enjoy this exercise?</h3>
          <p className="demo-description">
            Click the button to increase the like count.
          </p>
          <p className="like-count" aria-live="polite">
            {likes === 0 ? "No likes yet" : `${likes} ${likes === 1 ? "like" : "likes"}`}
          </p>
          <button
            className="primary-button like-button"
            type="button"
            onClick={handleLike}
          >
            {/* Conditional rendering changes the label after the first click. */}
            {likes === 0 ? "Like" : `${likes} ${likes === 1 ? "Like" : "Likes"}`}
          </button>
        </section>
      </div>
    </>
  );
}
