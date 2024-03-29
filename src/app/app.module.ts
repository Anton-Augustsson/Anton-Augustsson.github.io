import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';
import { CadProjectPortfolioComponent } from './cad-project-portfolio/cad-project-portfolio.component';
import { SetupComponent } from './setup/setup.component';
import { HomelabComponent } from './homelab/homelab.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutComponent } from './about/about.component';
import { ToggleSidenavComponent } from './toggle-sidenav/toggle-sidenav.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPortfolioHeaderComponent } from './project-portfolio-header/project-portfolio-header.component';
import { HomeComponent } from './home/home.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'project-portfolio', component: ProjectPortfolioComponent },
  { path: 'cad-project-portfolio', component: CadProjectPortfolioComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'homelab', component: HomelabComponent },
  { path: 'hobbies', component: HobbiesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectPortfolioComponent,
    CadProjectPortfolioComponent,
    SetupComponent,
    HomelabComponent,
    HobbiesComponent,
    AboutComponent,
    ToggleSidenavComponent,
    ProjectComponent,
    ProjectPortfolioHeaderComponent,
    HomeComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
