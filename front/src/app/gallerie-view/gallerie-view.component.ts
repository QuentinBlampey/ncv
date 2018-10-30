import { Component, OnInit } from '@angular/core';
import { GalerieService } from '../galerie.service';
import { Galerie } from '../galerie';

@Component({
  selector: 'app-gallerie-view',
  templateUrl: './gallerie-view.component.html',
  styleUrls: ['./gallerie-view.component.scss']
})
export class GallerieViewComponent implements OnInit {

  galerie: Galerie[];
  sortedGalerie: Galerie[];
  filtres = {selectedEvent: 'ncv_b', selectedSexe: 'H', selectedPhase: 'finales', selectedYear: 2017};
  src_grand = '';
  affiche = false;

  getGalerie(): void {
    this.galerieServ.getGalerie()
    .subscribe(galerie => {this.galerie = galerie;
      this.sortedGalerie = galerie;
    this.tri(); });
  }

  constructor(private galerieServ: GalerieService) { }

  ngOnInit() {
    this.getGalerie();
  }

  filtreschange(event) {
    this.filtres = event;
    this.tri();
  }

  tri() {
    this.sortedGalerie = this.galerie.filter((resultat) => resultat.phase === this.filtres.selectedPhase && resultat.event === this.filtres.selectedEvent && resultat.annee === this.filtres.selectedYear);
  }

  afficherGrand(src) {
    this.src_grand = src;
    this.affiche = true;
  }

}
