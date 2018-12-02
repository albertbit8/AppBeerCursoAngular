import { Component, OnInit } from '@angular/core';
import { CervejasApiService } from 'src/app/services/cervejas-api.service';
import { ICerveja } from 'src/models/cerveja';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerveja-form-template',
  templateUrl: './cerveja-form-template.component.html',
  styleUrls: ['./cerveja-form-template.component.css']
})
export class CervejaFormTemplateComponent implements OnInit {
  tipos: string[] = ['IPA', 'PILSEN', 'ALE']
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
    private cervejasApiService: CervejasApiService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.cervejasApiService.postCerveja(this.cerveja).subscribe(data => {
      this.toastr.success('Cerveja Cadastrada');
      this.router.navigate(['/cervejas'])
    })
    
  }
}
