import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";

function Avatar() {
  console.log("calling Avatar function");
  return (
    <div className="avatar">
      <img src="image.png" alt="Tom Brady" />
    </div>
  );
}

function Intro() {
  console.log("calling Intro function");
  return <h1>Tom Brady</h1>;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Football IQ" emoji="🧠" color="blue" />
      <Skill name="Precision Accuracy" emoji="🎯" color="yellow" />
      <Skill name="Adaptable Leadership" emoji="🤝" color="lightgreen" />
      <Skill name="Rapid Processing" emoji="⚡" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {
          <p>
            {" "}
            I'm the guy who spent 23 years obsessed with winning on the field. I
            managed to grab seven rings, but I still love practicing and staying
            sharp. These days, I’m talking football in the booth for Fox Sports.
          </p> /* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */
        }
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
