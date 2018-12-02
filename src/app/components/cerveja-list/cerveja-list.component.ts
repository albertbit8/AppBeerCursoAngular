import { Component, OnInit } from '@angular/core';
import { ICerveja } from 'src/models/cerveja';
import { Pipe } from '@angular/core'
import { CervejasApiService } from '../../services/cervejas-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cerveja-list',
  templateUrl: './cerveja-list.component.html',
  styleUrls: ['./cerveja-list.component.css'],
  providers: [CervejasApiService]
})  
export class CervejaListComponent implements OnInit {
  errorMessage: any;
  
  onNotify(message: string): void {
    console.log(message)
  }
  pageTitle: string = 'Lista de Cervejas'
  totalCervejas: number = 0
  
  listFilter: string
  cervejas: ICerveja[] = []


  showImage: boolean = false

  constructor(
    private cervejaService: CervejasApiService,
    private toastr: ToastrService
  ) { 
    
  }

  ngOnInit(): void {
    this.cervejaService.getCervejas()
      .subscribe(data => {
        console.log(data)
        this.cervejas = data,
        this.totalCervejas = this.cervejas.length
      })
    
  }

  alerta(nome: string): void {
    alert(nome)
  }

  showImages() {
    this.showImage = !this.showImage
  }

  deleteBeer(id: number) {
    this.cervejaService.deleteCerveja(id).subscribe(data => {
      this.toastr.success('Cerveja Deletada');
      this.cervejaService.getCervejas()
        .subscribe(data => {
          console.log(data)
          this.cervejas = data,
            this.totalCervejas = this.cervejas.length
        })
    })
  }
}
