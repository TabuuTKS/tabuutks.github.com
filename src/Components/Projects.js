import React, { useState, useEffect } from "react";
import './Home.css'

const projects = [
  {
    id: 1,
    title: "Codename Alien",
    image: "https://github.com/TabuuTKS/Codename-Alien/raw/main/Docs/DemoLevel.jpg",
    description:
      "A 2D sci-fi platformer where an alien crash-lands on a hostile, uninhabitable planet. With the atmosphere against him and no sign of help, his only chance of survival is to gather essential resources, find his missing spaceship parts, and escape the planet before it's too late.",
    technologies: ["Unity", "C#", "Tilemaps", "Platformer Physics"],
    github: "https://github.com/TabuuTKS/Codename-Alien",
  },
  {
    id: 2,
    title: "Pick The Lock",
    image: "PickTheLock.jpg",
    description:
      "A Game About Picking Lock, With 3 Levels of difficulty. a lockpicker rotates and you have to press space at picking points to pick the lock.",
    technologies: ["Unity", "C#"],
    github: "https://github.com/TabuuTKS/Pick-The-Lock",
  },
];

export function Projects() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNext = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
      setVisible(true);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (index === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 300);
  };

  return (
    <section className="projects-section container mb-2" style={{ minHeight: "70vh" }}>
      <h2 className="mb-4 text-center" style={{ color: "#00ffff", }}>Projects</h2>

      <div className={`fade-card ${visible ? "show" : ""}`}>
        <div
          className="card themed-card mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <img
            src={projects[current].image}
            className="card-img-top"
            alt={projects[current].title}
          />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#00ffff" }}>
              {projects[current].title}
            </h4>
            <p className="card-text" style={{ color: "#f5f5f5" }}>
              {projects[current].description}
            </p>
            <p className="card-text" style={{ color: "#aaaaaa" }}>
              <strong>Technologies:</strong> {projects[current].technologies.join(", ")}
            </p>
            <a
              href={projects[current].github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="d-flex justify-content-center mt-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 rounded-circle ${index === current ? "active-dot" : ""
              }`}
            style={{
              width: "12px",
              height: "12px",
              padding: 0,
              borderRadius: "50%",
              backgroundColor: index === current ? "#00ffff" : "#444",
              border: "none",
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}