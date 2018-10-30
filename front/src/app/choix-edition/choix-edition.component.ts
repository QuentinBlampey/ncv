import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-edition',
  templateUrl: './choix-edition.component.html',
  styleUrls: ['./choix-edition.component.scss']
})
export class ChoixEditionComponent implements OnInit {
  selectedEvent = 'ncv_b';
  selectedSexe = 'H';
  selectedPhase = 'finales';
  selectedYear = 2017;
  url: string;
  filtres = {selectedEvent: this.selectedEvent, selectedSexe: this.selectedSexe, selectedPhase: this.selectedPhase, selectedYear: this.selectedYear};

  @Output() pressedButton = new EventEmitter();

  constructor(location: Location, private router: Router) {
      router.events.subscribe((val) => {
        this.url = location.path();
    });
  }

  ngOnInit() {
  }

  getColor() {
     return 'rgb(27,117,188)';
  }

  onPressedButtonEvent(string) {
    this.selectedEvent = string;
    this.filtres = {selectedEvent: this.selectedEvent, selectedSexe: this.selectedSexe, selectedPhase: this.selectedPhase, selectedYear: this.selectedYear};
    this.pressedButton.emit(this.filtres);
  }

  onPressedButtonSexe(string) {
    this.selectedSexe = string;
    this.filtres = {selectedEvent: this.selectedEvent, selectedSexe: this.selectedSexe, selectedPhase: this.selectedPhase, selectedYear: this.selectedYear};
    this.pressedButton.emit(this.filtres);
  }

  onPressedButtonPhase(string) {
    this.selectedPhase = string;
    this.filtres = {selectedEvent: this.selectedEvent, selectedSexe: this.selectedSexe, selectedPhase: this.selectedPhase, selectedYear: this.selectedYear};
    this.pressedButton.emit(this.filtres);
  }

  onPressedButtonYear() {
    this.filtres = {selectedEvent: this.selectedEvent, selectedSexe: this.selectedSexe, selectedPhase: this.selectedPhase, selectedYear: this.selectedYear};
    this.pressedButton.emit(this.filtres);
  }
}
