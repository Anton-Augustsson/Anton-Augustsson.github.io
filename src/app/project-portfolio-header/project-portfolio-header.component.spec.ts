import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPortfolioHeaderComponent } from './project-portfolio-header.component';

describe('ProjectPortfolioHeaderComponent', () => {
  let component: ProjectPortfolioHeaderComponent;
  let fixture: ComponentFixture<ProjectPortfolioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPortfolioHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPortfolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
