import { Component, Renderer2, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Project } from '../project/project-interface';


@Component({
  selector: 'app-project-portfolio',
  templateUrl: './project-portfolio.component.html',
  styleUrls: ['./project-portfolio.component.css']
})
export class ProjectPortfolioComponent implements AfterViewInit{
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

  @ViewChild('projects', { static: false }) divProjects = {} as ElementRef;

  constructor(private el: ElementRef, private renderer:Renderer2) {}

  ngAfterViewInit() {
    const project_article = this.renderer.createElement('article');
    const project_div_content = this.renderer.createElement('div');
    const project_a_href = this.renderer.createElement('a');
    const project_div_image = this.renderer.createElement('div');
    const project_img = this.renderer.createElement('img');
    const project_div_info = this.renderer.createElement('div');
    const project_h3_name = this.renderer.createElement('h3');
    const project_p_desc = this.renderer.createElement('p');

    const project_name_txt = this.renderer.createText(this.aatts.name);
    const project_desc_txt = this.renderer.createText(this.aatts.desc);

    this.renderer.addClass(project_article, "project-article");
    this.renderer.addClass(project_div_content, "project-content");
    this.renderer.addClass(project_div_image, "project-image");
    this.renderer.addClass(project_div_info, "project-info");
    this.renderer.addClass(project_h3_name, "project-name");
    this.renderer.addClass(project_p_desc, "project-desc");

    this.renderer.setAttribute(project_a_href, "href", `${this.aatts.href}`);
    this.renderer.setAttribute(project_img, "src", `${this.aatts.image}`);
    this.renderer.setAttribute(project_img, "alt", `${this.aatts.image_desc}`);

    this.renderer.appendChild(project_h3_name, project_name_txt);
    this.renderer.appendChild(project_p_desc, project_desc_txt);

    this.renderer.appendChild(project_article, project_div_content);
    this.renderer.appendChild(project_div_content, project_a_href);
    this.renderer.appendChild(project_div_content, project_div_info);
    this.renderer.appendChild(project_a_href, project_div_image);
    this.renderer.appendChild(project_div_image, project_img);
    this.renderer.appendChild(project_div_info, project_h3_name);
    this.renderer.appendChild(project_div_info, project_p_desc);

    this.renderer.appendChild(this.divProjects.nativeElement, project_article);
  }

  create_project() {

  }
}
//<article class="project-article">
//  <div class="project-content">
//    <a href={{project_href}}>
//      <div class="project-image">
//        <img src={{project_image}} alt={{project_image_desc}}> 
//      </div>
//    </a>
//    <div class="project-info">
//      <h3 class="project-name">{{project_name}}</h3>
//      <p class="project-desc">{{project_desc}}</p>
//    </div>
//  </div>
//</article>
//<div class="projects">
//  <app-project project_href={{aatts.href}} project_image={{aatts.image}} project_image_desc={{aatts.image_desc}} project_name={{aatts.name}} project_desc={{aatts.desc}}></app-project>
//  <app-project project_href={{samarit.href}} project_image={{samarit.image}} project_image_desc={{samarit.image_desc}} project_name={{samarit.name}} project_desc={{samarit.desc}}></app-project>
//  <app-project project_href={{the_flying_dutchman.href}} project_image={{the_flying_dutchman.image}} project_image_desc={{the_flying_dutchman.image_desc}} project_name={{the_flying_dutchman.name}} project_desc={{the_flying_dutchman.desc}}></app-project>
//  <app-project project_href={{aadwm.href}} project_image={{aadwm.image}} project_image_desc={{aadwm.image_desc}} project_name={{aadwm.name}} project_desc={{aadwm.desc}}></app-project>
//  <app-project project_href={{dwm_bar.href}} project_image={{dwm_bar.image}} project_image_desc={{dwm_bar.image_desc}} project_name={{dwm_bar.name}} project_desc={{dwm_bar.desc}}></app-project>
//  <app-project project_href={{jdes.href}} project_image={{jdes.image}} project_image_desc={{jdes.image_desc}} project_name={{jdes.name}} project_desc={{jdes.desc}}></app-project>
//  <app-project project_href={{install_scrip.href}} project_image={{install_scrip.image}} project_image_desc={{install_scrip.image_desc}} project_name={{install_scrip.name}} project_desc={{install_scrip.desc}}></app-project>
//  <app-project project_href={{fan_controller.href}} project_image={{fan_controller.image}} project_image_desc={{fan_controller.image_desc}} project_name={{fan_controller.name}} project_desc={{fan_controller.desc}}></app-project>
//  <app-project project_href={{arduino_farm.href}} project_image={{arduino_farm.image}} project_image_desc={{arduino_farm.image_desc}} project_name={{arduino_farm.name}} project_desc={{arduino_farm.desc}}></app-project>
//</div>