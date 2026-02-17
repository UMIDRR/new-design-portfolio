import "./hero.css";

function Hero() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-badge">
          Available for Work
        </div>

        <h1 className="hero-title">
          Umid <span>Rzazada</span>
        </h1>

        <h2 className="hero-subtitle">
          Full Stack Developer
        </h2>

        <p className="hero-desc">
          Crafting innovative digital experiences with modern technologies and clean code
        </p>

        <div className="hero-buttons">
          <button
            className="primary"
            onClick={() => scrollToSection("projects")}
          >
            View Projects →
          </button>

          <button
            className="secondary"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me ⬇
          </button>
        </div>

        <div className="scroll-indicator"></div>

      </div>
    </section>
  );
}

export default Hero;
