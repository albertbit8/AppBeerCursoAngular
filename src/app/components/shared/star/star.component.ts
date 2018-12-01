import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating: number
  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(star: number) {
    this.notify.emit("clicou e sao " + star + " estrelas");
  }

}
