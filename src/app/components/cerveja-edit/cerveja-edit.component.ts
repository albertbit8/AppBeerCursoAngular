import { Component, OnInit } from '@angular/core';
import { ICerveja } from 'src/models/cerveja';
import { CervejasApiService } from 'src/app/services/cervejas-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cerveja-edit',
  templateUrl: './cerveja-edit.component.html',
  styleUrls: ['./cerveja-edit.component.css']
})
export class CervejaEditComponent implements OnInit {

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
    private cervejaService: CervejasApiService,
    private router: Router,
    private route: ActivatedRoute,

    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cervejaService.getCerveja(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe(data => {
        this.cerveja = data
      })
  }

  OnBack(): void {
    this.router.navigate(['/cervejas'])
  }
  
  onSubmit(form) {
    this.cervejaService.putCerveja(this.cerveja).subscribe(data => {
      this.toastr.success('Cerveja Editada');
      this.router.navigate(['/cervejas'])
    })

  }

}
