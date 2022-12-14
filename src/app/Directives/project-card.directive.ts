import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appProjectCard]'
})
export class ProjectCardDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const project_div = this.renderer.createElement('div');
    const project_1 = this.renderer.createElement('app-project');
    const project_2 = this.renderer.createElement('app-project');

    this.renderer.addClass(project_div, 'projects');

    this.renderer.setAttribute(project_1, "project_href", "");
    this.renderer.setAttribute(project_1, "project_image", "");
    this.renderer.setAttribute(project_1, "project_image_desc", "");
    this.renderer.setAttribute(project_1, "project_name", "bwdsafla");
    this.renderer.setAttribute(project_1, "project_desc", "dsaf");
    this.renderer.setAttribute(project_2, "project_href", "");
    this.renderer.setAttribute(project_2, "project_image", "");
    this.renderer.setAttribute(project_2, "project_image_desc", "");
    this.renderer.setAttribute(project_2, "project_name", "bla");
    this.renderer.setAttribute(project_2, "project_desc", "sfea");

    this.renderer.appendChild(project_div, project_1);
    this.renderer.appendChild(project_div, project_2);
    this.renderer.appendChild(this.el.nativeElement, project_div);
  }

}
