import React, { useState, useEffect } from "react";
import './Home.css'

const cards = [
    {
        id: 1,
        title: "Card 1",
        content:
            "Codename: Alien, a 2D sci-fi platformer project which is ongoing",
        image: "https://github.com/TabuuTKS/Codename-Alien/raw/main/Docs/DemoLevel.jpg",
        link: "https://github.com/TabuuTKS/Codename-Alien",
    },
    {
        id: 2,
        title: "Card 2",
        content:
            "Pick The Lock, A Game About Picking Lock, With 3 Levels",
        image: "PickTheLock.jpg",
        link: "https://github.com/TabuuTKS/Pick-The-Lock",
    },
];

export function Home() {
    const [currentCard, setCurrentCard] = useState(0);
    const [visible, setVisible] = useState(true);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextCard();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNextCard = () => {
        setVisible(false);
        setTimeout(() => {
            setCurrentCard((prev) => (prev + 1) % cards.length);
            setVisible(true);
        }, 300);
    };

    const handleDotClick = (index) => {
        if (index === currentCard) return;
        setVisible(false);
        setTimeout(() => {
            setCurrentCard(index);
            setVisible(true);
        }, 300);
    };

    return (
        <section className="home-section container mb-1" style={{ minHeight: "70vh" }}>
            <div className="row align-items-center">
                {/* Left intro */}
                <div className="col-md-6 mb-4 mb-md-0 left-card">
                    <h1>Hi, I Am Maanas Menghani</h1>
                    <h5>also known as Tabuu TKS</h5>
                    <p>
                        Passionate Unity developer skilled in creating engaging 2D and 3D experiences using C#. Experienced in implementing core gameplay mechanics, UI systems, and performance optimization. Focused on writing clean, modular code and continuously learning to build better interactive worlds.
                        <br/> <br/>
                        With a strong foundation in C# and the Unity engine, I enjoy prototyping mechanics, experimenting with shaders, and fine-tuning player feedback loops. My focus lies in crafting smooth, responsive gameplay while maintaining performance and scalability—whether it's a fast-paced action game or an atmospheric exploration experience.
                    </p>
                </div>

                {/* Right card */}
                <div className="col-md-6">
                    <div className={`fade-card ${visible ? "show" : ""}`}>
                        <div className="card themed-card shadow-sm">
                            <img
                                src={cards[currentCard].image}
                                className="card-img-top"
                                alt={cards[currentCard].title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{cards[currentCard].title}</h5>
                                <p className="card-text">{cards[currentCard].content}</p>
                                <a href={cards[currentCard].link} className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="d-flex justify-content-center mt-3 card-dots">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`mx-1 rounded-circle ${index === currentCard ? "active-dot" : ""
                                    }`}
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    padding: 0,
                                    borderRadius: "50%",
                                    backgroundColor: index === currentCard ? "#00ffff" : "#444",
                                }}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}