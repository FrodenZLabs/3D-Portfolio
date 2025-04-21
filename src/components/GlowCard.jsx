import React, { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // Refs for all the cards
  const cardRefs = useRef([]);

  // When mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // Get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // Get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle form the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // Adjust the angle so that it is between 0 and 360
    angle = (angle + 360) % 360;

    // Set the andle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  // Return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-hover timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-lg text-white-50">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
