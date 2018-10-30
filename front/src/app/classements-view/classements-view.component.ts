import { Component, OnInit } from '@angular/core';
import { ClassementsService } from '../classements.service';
import { Classements } from '../classements';

@Component({
  selector: 'app-classements-view',
  templateUrl: './classements-view.component.html',
  styleUrls: ['./classements-view.component.scss']
})
export class ClassementsViewComponent implements OnInit {

  classements: Classements[];
  sortedClassements: Classements[];
  filtres = {selectedEvent: 'ncv_b', selectedSexe: 'H', selectedPhase: 'finales', selectedYear: 2017};

  getClassements(): void {
    this.classementsServ.getClassements()
    .subscribe(classements => {this.classements = classements;
      this.sortedClassements = classements;
    this.tri(); });
  }

  constructor(private classementsServ: ClassementsService) { }

  ngOnInit() {
    this.getClassements();
  }

  filtreschange(event) {
    this.filtres = event;
    this.tri();
  }

  tri() {
    this.sortedClassements = this.classements.filter((resultat) => resultat.sexe == this.filtres.selectedSexe && resultat.event == this.filtres.selectedEvent && resultat.annee == this.filtres.selectedYear);
  }

  getFinalistes(classement) {
    if (classement.phase == 'finales') {
        return 'Finaliste'
        }
    else {
        return ''
        }
  }
}
