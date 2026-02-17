import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">
        About Me
        <span></span>
      </h2>

      <div className="about-container">
        {/* LEFT */}
        <div className="about-card">
          <h3>Passionate Developer & Problem Solver</h3>

          <p>
            I am Umid Rzazada, a graduate of Computer Science from Baku State
            University. For over 3 years, I have been working as a Full Stack
            Developer, building modern, scalable, and secure web applications.
            On the frontend, I work with HTML, CSS, TailwindCSS, React,
            JavaScript, and TypeScript to create responsive and user-focused
            interfaces. I follow UI/UX best practices and transform Figma
            designs into clean, pixel-perfect implementations. On the backend, I
            develop RESTful APIs using Node.js and Express.js, working with both
            MySQL and MongoDB databases. I apply security best practices such as
            password hashing with bcrypt and environment configuration using
            .env files. I use Postman for API testing and Git/GitHub for version
            control. I prioritize clean architecture, maintainable code, and
            performance optimization. I am highly motivated to learn new
            technologies and continuously improve my skills. I am open to new
            projects, collaborations, and professional opportunities.
          </p>
        </div>

        {/* RIGHT */}
        <div className="skills">
          <h3>Core Skills</h3>

          <div className="skill">
            <span>Frontend Development</span>
            <div className="progress">
              <div
                className="progress-bar frontend"
                style={{ width: "90%" }}
              ></div>
            </div>
            <span className="percent">90%</span>
          </div>

          <div className="skill">
            <span>Backend Development</span>
            <div className="progress">
              <div
                className="progress-bar backend"
                style={{ width: "95%" }}
              ></div>
            </div>
            <span className="percent">95%</span>
          </div>

          <div className="skill">
            <span>UI/UX Design</span>
            <div className="progress">
              <div className="progress-bar uiux" style={{ width: "75%" }}></div>
            </div>
            <span className="percent">75%</span>
          </div>

          <div className="skill">
            <span>DevOps & Cloud</span>
            <div className="progress">
              <div
                className="progress-bar devops"
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className="percent">80%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
