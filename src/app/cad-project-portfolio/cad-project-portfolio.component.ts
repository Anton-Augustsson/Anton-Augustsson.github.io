import { Component } from '@angular/core';
import { Project } from '../project/project-interface';

@Component({
  selector: 'app-cad-project-portfolio',
  templateUrl: './cad-project-portfolio.component.html',
  styleUrls: ['./cad-project-portfolio.component.css']
})
export class CadProjectPortfolioComponent {
  tplds: Project = {
    href: "https://github.com/Anton-Augustsson/TP-Link-Deco-stand", 
    image: "",
    image_desc: "",
    name: "TP-Link Deco stand",
    desc: "Wall mounted stand for TP-Link-Deco X60 mesh."
  };
  ptw: Project = {
    href: "https://github.com/Anton-Augustsson/power-tool-workbench", 
    image: "",
    image_desc: "",
    name: "Power tool workbench",
    desc: "A stable flat working surface for power tools, assembly and finishing."
  };
  mcsc: Project = {
    href: "https://github.com/Anton-Augustsson/micro-computer-server-cases", 
    image: "",
    image_desc: "",
    name: "Micro computer server cases",
    desc: "Server rack cases for micro computers like raspberry pi, nvidia jetson as well as storage cases."
  };
  w3dp: Project = {
    href: "https://github.com/Anton-Augustsson/workshop-3d-printables", 
    image: "",
    image_desc: "",
    name: "Workshop 3D Printables",
    desc: "Tools, storages and adapters is this repositories purpose."
  };
  wic: Project = {
    href: "https://github.com/Anton-Augustsson/walk-in-closet", 
    image: "",
    image_desc: "",
    name: "Walk in closet",
    desc: "A small open design walk-in closet."
  };
  ks: Project = {
    href: "https://github.com/Anton-Augustsson/kayak-storage", 
    image: "",
    image_desc: "",
    name: "Kayak Storage",
    desc: "Open kayak storage with roof."
  };
  nightstand: Project = {
    href: "https://github.com/Anton-Augustsson/nightstands", 
    image: "",
    image_desc: "",
    name: "Nightstand",
    desc: "Modern and slim nightstands."
  };
  wtc: Project = {
    href: "https://github.com/Anton-Augustsson/woodworking-tool-cabinet", 
    image: "",
    image_desc: "",
    name: "Woodworking tool cabinet",
    desc: "Woodworking Tool cabinet inspired by Rob Cosmans designed."
  };
  sb: Project = {
    href: "https://github.com/Anton-Augustsson/shoe-bench", 
    image: "",
    image_desc: "",
    name: "Shoe bench",
    desc: "Shoe bench with one shelf and a storage unit for shoe care items. It is made out of tick teak plywood and solid teak."
  };
  sw: Project = {
    href: "https://github.com/Anton-Augustsson/scandinavian-workbench", 
    image: "",
    image_desc: "",
    name: "Scandinavian workbench",
    desc: "A scandinavian workbench with roubo style legs and sliding leg"
  };
  desk: Project = {
    href: "https://github.com/Anton-Augustsson/desk", 
    image: "",
    image_desc: "",
    name: "Desk",
    desc: "My custom made desk out of solid oak."
  };
}