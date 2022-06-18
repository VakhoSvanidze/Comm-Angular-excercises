import "./style.css";
import img from "./assets/bostonis-filiali.jpg";

const card = document.createElement("div");
card.className = "card";

const header = document.createElement("h1");
header.textContent = `My inspiration
  to study programming`;

card.appendChild(header);

const image = document.createElement("img");
image.src = img;
image.className = "image";
card.appendChild(image);

document.body.appendChild(card);
