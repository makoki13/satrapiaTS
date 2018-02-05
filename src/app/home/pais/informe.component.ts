import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  @Input() showModal = false;
  public title = 'HOLA';
  public subtitle = 'Adios';

  constructor() { }

  ngOnInit() {
  }

  cancelAction() {}
}

