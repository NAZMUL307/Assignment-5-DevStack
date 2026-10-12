import type { Technology } from "../types/technology";

interface StackProps {
  technologies: Technology[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

export default function Stack({ technologies, onRemove, onClear }: StackProps) {
  return (
    <section className="stack-section" id="your-stack">
      <div className="container">
        <div className="section-heading stack-heading">
          <div>
            <span className="section-kicker">YOUR TOOLKIT</span>
            <h2>Your <span className="gradient-text">Stack</span></h2>
            <p>Keep your favorite technologies together in one place.</p>
          </div>
          {technologies.length > 0 && (
            <button className="clear-button" onClick={onClear}>Remove all</button>
          )}
        </div>

        {technologies.length === 0 ? (
          <div className="empty-stack">
            <div className="empty-stack-icon">＋</div>
            <h3>Your stack is waiting</h3>
            <p>Add technologies from the library below and they’ll show up here.</p>
            <a className="button button-outline" href="#technologies">Browse technologies</a>
          </div>
        ) : (
          <div className="stack-list">
            {technologies.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <span className="stack-item-icon" style={{ backgroundColor: technology.color }}>{technology.icon}</span>
                <div className="stack-item-info">
                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
                <button className="remove-button" onClick={() => onRemove(technology.id)} aria-label={`Remove ${technology.name}`}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="stack-summary">
          <span><span className="summary-dot" /> {technologies.length} {technologies.length === 1 ? "technology" : "technologies"} selected</span>
          <span>Curated by you <b>✦</b></span>
        </div>
      </div>
    </section>
  );
}