import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrl: './mybutton.component.css'
})
export class MybuttonComponent {
  @Input() btnClass: string = 'primary'; 
  @Output() clicked = new EventEmitter<Event>(); 

  onClick(event: Event) {
    this.clicked.emit(event);
  }
}
