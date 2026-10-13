import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import technologiesData from "./data/technologies.json";
import type { Technology, TechnologyCategory } from "./types/technology";

const technologies = technologiesData as Technology[];
const categories = ["All", "Frontend", "Backend", "Database", "Language", "Styling", "DevOps", "Tools"] as const;
type CategoryFilter = typeof categories[number];

export default function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredTechnologies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return technologies.filter((technology) => {
      const matchesCategory = activeCategory === "All" || technology.category === (activeCategory as TechnologyCategory);
      const matchesSearch = technology.name.toLowerCase().includes(query)
        || technology.description.toLowerCase().includes(query)
        || technology.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function handleAdd(technology: Technology) {
    if (selectedTechnologies.some((item) => item.id === technology.id)) {
      toast.info(`${technology.name} is already in your stack.`);
      return;
    }
    setSelectedTechnologies((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack!`);
  }

  function handleRemove(id: number) {
    const removed = selectedTechnologies.find((technology) => technology.id === id);
    setSelectedTechnologies((current) => current.filter((technology) => technology.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  }

  function handleClear() {
    if (selectedTechnologies.length === 0) return;
    setSelectedTechnologies([]);
    toast.success("Your stack has been cleared.");
  }

  function handleExplore() {
    setIsLoading(true);
    window.setTimeout(() => {
      document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" });
      setIsLoading(false);
    }, 250);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="technology-section" id="technologies">
          <div className="container">
            <div className="section-heading technology-heading">
              <div>
                <span className="section-kicker">THE DEVELOPER TOOLKIT</span>
                <h2>Explore <span className="gradient-text">Technologies</span></h2>
                <p>Powerful tools to help you design, develop, and deliver your next big thing.</p>
              </div>
              <button className="button button-gradient explore-cta" onClick={handleExplore} disabled={isLoading}>
                {isLoading ? "Loading..." : "Explore the library"} <span aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="library-toolbar">
              <div className="category-filters" aria-label="Filter by category">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-chip ${activeCategory === category ? "filter-chip-active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <label className="search-box">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Search technologies..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  aria-label="Search technologies"
                />
              </label>
            </div>

            <div className="results-line">
              <span>Showing <strong>{filteredTechnologies.length}</strong> technologies</span>
              <a href="#your-stack">Your Stack ({selectedTechnologies.length}) ↓</a>
            </div>

            {filteredTechnologies.length > 0 ? (
              <div className="technology-grid">
                {filteredTechnologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={selectedTechnologies.some((item) => item.id === technology.id)}
                    onAdd={handleAdd}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results"><span>⌕</span><h3>No technologies found</h3><p>Try another search term or category.</p><button className="button button-outline" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>Clear filters</button></div>
            )}
          </div>
        </section>

        <section className="projects-strip" id="projects">
          <div className="container projects-strip-inner">
            <div className="projects-symbol">✦</div>
            <div><span className="section-kicker">READY TO CREATE?</span><h2>Your next project starts with <span className="gradient-text">one good choice.</span></h2><p>Pick your tools, trust your process, and turn your ideas into something real.</p></div>
            <a className="button button-gradient" href="#your-stack">Build your stack →</a>
          </div>
        </section>

        <Stack technologies={selectedTechnologies} onRemove={handleRemove} onClear={handleClear} />
      </main>
      <Footer />
    </>
  );
}