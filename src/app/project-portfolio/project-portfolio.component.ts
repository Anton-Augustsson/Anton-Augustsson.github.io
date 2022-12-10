import { Component } from '@angular/core';

interface Project {
  href: string;
  image: string;
  image_desc: string;
  name: string;
  desc: string;
}
@Component({
  selector: 'app-project-portfolio',
  templateUrl: './project-portfolio.component.html',
  styleUrls: ['./project-portfolio.component.css']
})
export class ProjectPortfolioComponent {
  aatts: Project = {
    href: "https://github.com/Anton-Augustsson/tts", 
    image: "/assets/projects/gnome-extension.png",
    image_desc: "aatts gnome-extension",
    name: "aatts",
    desc: "Text to speechaatts is a text to speech program used for speech synthesis as well as generate a mp3 from a text file."
  };
  samarit: Project = {
    href: "https://github.com/Anton-Augustsson/tts", 
    image: "/assets/projects/samarit_chat.png",
    image_desc: "Samarit chat",
    name: "Samarit",
    desc: "Service app for shopping groceries or picking up a package at the post office, and much more."
  };
  the_flying_dutchman: Project = {
    href: "https://github.com/Anton-Augustsson/a-handful-of-sailors", 
    image: "/assets/projects/flying-dutchman.png",
    image_desc: "The Flying Dutchman",
    name: "The Flying Dutchman",
    desc: "Ecommerce Website for a pub written in html, css, and javascript, with MVC design pattern."
  };
  aadwm: Project = {
    href: "https://github.com/Anton-Augustsson/aadwm", 
    image: "",
    image_desc: "",
    name: "aadwm",
    desc: "A fork of dwm from suckless."
  };
  dwm_bar: Project = {
    href: "https://github.com/Anton-Augustsson/dwm_bar", 
    image: "",
    image_desc: "",
    name: "dwm_bar",
    desc: "A bar for dwm window manager, inspired by joestandring dwm_bar."
  };
  jdes: Project = {
    href: "https://github.com/Anton-Augustsson/Jupyter-Differential-equation-solver", 
    image: "",
    image_desc: "",
    name: "Jupyter Differential equation solver",
    desc: "Differential equation solver, Jupyter Notebook."
  };
  install_scrip: Project = {
    href: "https://github.com/Anton-Augustsson/installation-scripts", 
    image: "",
    image_desc: "",
    name: "Installation Scripts",
    desc: "Bash installation scripts for various linux distributions."
  };
  fan_controller: Project = {
    href: "https://github.com/Anton-Augustsson/fan_controller", 
    image: "",
    image_desc: "",
    name: "Fan controller",
    desc: "A fan controller for Arduino."
  };
  arduino_farm: Project = {
    href: "https://github.com/Anton-Augustsson/fan_controller", 
    image: "",
    image_desc: "",
    name: "Arduino Farm",
    desc: "An automatic watering and solar system to grow plants."
  };
}