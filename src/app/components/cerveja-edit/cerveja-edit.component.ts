import { Component, OnInit, Input } from '@angular/core';
import { ICerveja } from 'src/models/cerveja';
import { CervejasApiService } from 'src/app/services/cervejas-api.service';

@Component({
  selector: 'app-cerveja-edit',
  templateUrl: './cerveja-edit.component.html',
  styleUrls: ['./cerveja-edit.component.css']
})
export class CervejaEditComponent implements OnInit {
  @Input() id
  constructor(
    private cervejaService: CervejasApiService
  ) { }

  ngOnInit(
    
  ) {
  }

}
