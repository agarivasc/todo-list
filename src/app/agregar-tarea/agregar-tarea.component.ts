import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  @Output() nuevaTareaEvent = new EventEmitter<string>();
  nuevaTarea = "";

  agregarTarea() {
    if(this.nuevaTarea.trim() !== "") {
      this.nuevaTareaEvent.emit(this.nuevaTarea);
      this.nuevaTarea = "";
    }
  }
}
