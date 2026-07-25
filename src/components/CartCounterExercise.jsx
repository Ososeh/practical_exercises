import { useState } from "react";
import { ExerciseHeader } from "./ExerciseHeader";

export function CartCounterExercise() {
  // The minimum quantity is one, so the initial state begins at one.
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    console.log("[Cart Counter] Quantity increased to:", quantity + 1);
    setQuantity((previousQuantity) => previousQuantity + 1);
  }

  function decreaseQuantity() {
    // Math.max provides a second safeguard against values below one.
    console.log(
      "[Cart Counter] Quantity decreased to:",
      Math.max(1, quantity - 1),
    );
    setQuantity((previousQuantity) => Math.max(1, previousQuantity - 1));
  }

  function resetQuantity() {
    console.log("[Cart Counter] Quantity reset to: 1");
    setQuantity(1);
  }

  return (
    <>
      <ExerciseHeader
        number={4}
        title="Product Cart Counter"
        description="Manage quantity with several event handlers while preventing the number from falling below one."
      />
      <div className="exercise-content">
        <section className="demo-card" aria-labelledby="product-name">
          <div className="product-preview">
            <span className="product-symbol" aria-hidden="true">
              ◇
            </span>
            <div className="product-copy">
              <strong id="product-name">Wireless Headphones</strong>
              <span>Product quantity selector</span>
            </div>
          </div>

          <div className="quantity-control">
            {/* Disabling the button shows users that one is the minimum. */}
            <button
              className="counter-button"
              type="button"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <div className="quantity-value" aria-live="polite">
              <strong>{quantity}</strong>
              <span>Quantity</span>
            </div>
            <button
              className="counter-button"
              type="button"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            className="secondary-button reset-button"
            type="button"
            onClick={resetQuantity}
          >
            Reset Quantity
          </button>
        </section>
      </div>
    </>
  );
}
