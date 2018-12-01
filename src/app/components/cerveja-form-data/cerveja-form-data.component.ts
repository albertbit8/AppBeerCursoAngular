import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerveja-form-data',
  templateUrl: './cerveja-form-data.component.html',
  styleUrls: ['./cerveja-form-data.component.css']
})
export class CervejaFormDataComponent implements OnInit {
  tipos: string[] = ['IPA', 'PILSEN', 'ALE']
  constructor() { }

  ngOnInit() {
  }

}
