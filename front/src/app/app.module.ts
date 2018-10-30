import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AccueilViewComponent } from './accueil-view/accueil-view.component';
import { ClassementsViewComponent } from './classements-view/classements-view.component';
import { CvgViewComponent } from './cvg-view/cvg-view.component';
import { DevenirPartenaireViewComponent } from './devenir-partenaire-view/devenir-partenaire-view.component';
import { FooterComponent } from './footer/footer.component';
import { GallerieViewComponent } from './gallerie-view/gallerie-view.component';
import { HeaderComponent } from './header/header.component';
import { HistoriqueViewComponent } from './historique-view/historique-view.component';
import { InscriptionViewComponent } from './inscription-view/inscription-view.component';
import { NcvViewComponent } from './ncv-view/ncv-view.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NosPartenairesViewComponent } from './nos-partenaires-view/nos-partenaires-view.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PointFortComponent } from './point-fort/point-fort.component';
import { PostComponent } from './post/post.component';
import { TableauComponent } from './tableau/tableau.component';
import { VtViewComponent } from './vt-view/vt-view.component';
import { ReseauxSociauxComponent } from './reseaux-sociaux/reseaux-sociaux.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { eventService } from './eventService/event.service';
import { BanniereTitreComponent } from './banniere-titre/banniere-titre.component';
import { EnConstructionComponent } from './en-construction/en-construction.component';
import { ChoixEditionComponent } from './choix-edition/choix-edition.component';
import { AccesComponent } from './acces/acces.component';
import { PrixComponent } from './prix/prix.component';
import { ArraySortPipe } from './sort.pipe';
import { AdminViewComponent } from './admin-view/admin-view.component';

const appRoutes: Routes = [
  { path: 'ncv', component: NcvViewComponent },
  { path: 'cvg', component: CvgViewComponent },
  { path: 'vt', component: VtViewComponent },
  { path: 'news', component: NewsViewComponent },
  { path: 'galerie', component: GallerieViewComponent },
  { path: 'classements', component: ClassementsViewComponent },
  { path: 'historique', component: HistoriqueViewComponent },
  { path: 'nos-partenaires', component: NosPartenairesViewComponent },
  { path: 'devenir-partenaire', component: DevenirPartenaireViewComponent },
  { path: 'inscription', component: InscriptionViewComponent },
  { path: 'plus-detail', component: AccesComponent },
  { path: '', component: AccueilViewComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    AccueilViewComponent,
    ClassementsViewComponent,
    CvgViewComponent,
    DevenirPartenaireViewComponent,
    FooterComponent,
    GallerieViewComponent,
    HeaderComponent,
    HistoriqueViewComponent,
    InscriptionViewComponent,
    NcvViewComponent,
    NewsViewComponent,
    NosPartenairesViewComponent,
    PartenaireComponent,
    PointFortComponent,
    PostComponent,
    TableauComponent,
    VtViewComponent,
    ReseauxSociauxComponent,
    EventComponent,
    BanniereTitreComponent,
    EnConstructionComponent,
    ChoixEditionComponent,
    AccesComponent,
    PrixComponent,
    ArraySortPipe,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ eventService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
