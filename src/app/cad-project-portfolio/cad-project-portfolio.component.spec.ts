import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProjectPortfolioComponent } from './cad-project-portfolio.component';

describe('CadProjectPortfolioComponent', () => {
  let component: CadProjectPortfolioComponent;
  let fixture: ComponentFixture<CadProjectPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadProjectPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadProjectPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
