import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CompetencesComponent,
    ContactsComponent,
    ExperiencesComponent,
    LoisirsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
