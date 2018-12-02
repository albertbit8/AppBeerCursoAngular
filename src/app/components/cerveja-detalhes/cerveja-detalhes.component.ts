import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICerveja, Cerveja } from 'src/models/cerveja';
import { CervejasApiService } from '../../services/cervejas-api.service';


@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.component.html',
  styleUrls: ['./cerveja-detalhes.component.css']
})
export class CervejaDetalhesComponent implements OnInit {
  cerveja: ICerveja = {
    id: null,
    nome: null,
    familia: null,
    litragem: null,
    preco: null,
    data: null,
    foto: null,
    ranking: null
  }
  
  constructor(
    private route: ActivatedRoute,
    private cervejaService: CervejasApiService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
      this.cervejaService.getCerveja(parseInt(this.route.snapshot.paramMap.get('id')))
        .subscribe(data => {        
          this.cerveja = data
        })
  }

  OnBack(): void {
    this.router.navigate(['/cervejas'])
  }

}
