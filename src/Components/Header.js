import React from 'react'
import './Header.css'

export default function Header({ onSelect }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => onSelect("Home")}>Tabuu TKS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link btn" aria-current="page" onClick={() => onSelect("Home")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" onClick={() => onSelect("About")}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" onClick={() => onSelect("Skills")}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" onClick={() => onSelect("Projects")}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" onClick={() => onSelect("SideProjects")}>Side-Projects/Clones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" onClick={() => onSelect("Contact")}>Contact</a>
              </li>
            </ul>
          </div>
          {/* Download button - OUTSIDE collapse */}
          <div className="d-none d-lg-block ms-3">
            <a
              href="/TabuuTKSResume.pdf"
              download
              className="btn btn-outline-info"
            >
              Download Resume
            </a>
          </div>

          {/* Download button - visible only on small screens */}
          <div className="d-lg-none w-100 mt-3">
            <a
              href="/TabuuTKSResume.pdf"
              download
              className="btn btn-outline-info w-100 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
