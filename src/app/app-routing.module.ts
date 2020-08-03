import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {CompetencesComponent} from "./components/competences/competences.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {LoisirsComponent} from "./components/loisirs/loisirs.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ExperiencesComponent} from "./components/experiences/experiences.component";

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'loisirs', component: LoisirsComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
