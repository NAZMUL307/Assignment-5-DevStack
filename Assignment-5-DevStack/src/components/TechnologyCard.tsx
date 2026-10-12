import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <span className="technology-icon" style={{ backgroundColor: technology.color }} aria-hidden="true">
          {technology.icon}
        </span>
        <span className="category-pill">{technology.category}</span>
      </div>
      <h3>{technology.name}</h3>
      <p>{technology.description}</p>
      <button
        className={`add-button ${isAdded ? "add-button-added" : ""}`}
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to your stack" : "+ Add to your stack"}
      </button>
    </article>
  );
}