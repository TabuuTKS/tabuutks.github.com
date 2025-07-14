import { useState } from "react";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { SideProjects } from './Components/SideProjects';
import { Contact } from './Components/Contact';

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home/>;
      case "About":
        return <About/>;
      case "Skills":
        return <Skills/>;
      case "Projects":
        return <Projects/>;
      case "SideProjects":
        return <SideProjects/>;
      case "Contact":
        return <Contact/>;
      default:
        return <Home/>;
    }
  };

  return (
    <div className="app-container">
      <Header onSelect={setActiveComponent}/>
      <main className="main-content" style={{ marginTop: "80px" }}>
        {renderComponent()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
