import React, { useState, useEffect } from "react";
import './Home.css'

const projects = [
  {
    id: 1,
    title: "TicTacToe - JavaProject",
    image: "TicTacToe.jpg",
    description:
      "A Basic Game of Tic Tac Toe Made using Java and JavaFX. Started as a Console App. Became a JavaFX Project The Starting Point Where my Programming Turned from College Assignments to Actual Projects",
    technologies: ["Java 17", "JavaFX 21", "SceneBuilder", "CSS"],
    github: "https://github.com/TabuuTKS/TicTacToe-JavaProject",
  },
  {
    id: 2,
    title: "Data Structure Simulator",
    image: "DS-Simulator.jpg",
    description:
      "This application is a comprehensive simulator for various data structures. It provides a user-friendly menu that allows users to select and perform different operations on data structures such as Arrays, Linked Lists, Stacks, Queues, etc.",
    technologies: ["C", "DSA", "Visual Studio"],
    github: "https://github.com/TabuuTKS/DataStructure-Simulator",
  },
  {
    id: 2,
    title: "Flappy Bird Clone",
    image: "FlappyBirdClone.jpg",
    description:
      "Hello Unity Engine!, This Was My First Game Made in Unity Game Engine. While Making This Clone Project. I Learnt The Absolute Basics of Unity Game Engine, from GameObjects to Prefabs etc. This Was Just A Beginning of an Awesome Journey",
    technologies: ["Unity", "C#"],
    github: "https://github.com/TabuuTKS/Flappy-Bird-Clone",
  },
];


export function SideProjects() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  // Optional auto-rotate

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
      <h2 className="mb-4 text-center" style={{ color: "#00ffff", }}>Side Projects/Clones</h2>

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