import React from "react";

export function Skills() {
  return (
    <section className="skills-section container mb-1" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4" style={{ color: "#00ffff" }}>Skills</h2>

      <div className="row">
        {/* Programming Languages */}
        <div className="col-md-6 mb-4">
          <h5 style={{ color: "#00ffff" }}>Programming Languages</h5>
          <ul style={{ color: "#aaaaaa" }}>
            <li>C#</li>
            <li>Python (Basics)</li>
            <li>JavaScript (Basics)</li>
            <li>C/C++ (Foundational)</li>
          </ul>
        </div>

        {/* Game Development */}
        <div className="col-md-6 mb-4">
          <h5 style={{ color: "#00ffff" }}>Game Development</h5>
          <ul style={{ color: "#aaaaaa" }}>
            <li>Unity Engine</li>
            <li>Basic Gameplay Programming</li>
            <li>Basic Level Design</li>
            <li>Prototyping</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="col-md-6 mb-4">
          <h5 style={{ color: "#00ffff" }}>Soft Skills</h5>
          <ul style={{ color: "#aaaaaa" }}>
            <li>Analytical Thinking (Break Tasks into Small Peices to perfom it)</li>
            <li>Willingness to Learn</li>
            <li>Creativity</li>
            <li>Collaboration</li>
            <li>Communication (Hindi/English)</li>
          </ul>
        </div>

        {/* Tools & Collaboration */}
        <div className="col-md-6 mb-4">
          <h5 style={{ color: "#00ffff" }}>Tools & Collaboration</h5>
          <ul style={{ color: "#aaaaaa" }}>
            <li>Git & GitHub using Github Desktop/GitKraken</li>
            <li>Visual Studio/Visual Studio Code</li>
            <li>SDLC (Waterfall and Agile) and UML (Basic Understanding)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}