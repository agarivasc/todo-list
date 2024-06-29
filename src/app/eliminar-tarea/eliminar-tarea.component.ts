import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eliminar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-tarea.component.html',
  styleUrl: './eliminar-tarea.component.css'
})
export class EliminarTareaComponent {
  @Output() eliminarTareaEvent = new EventEmitter<void>();

  eliminarTarea() {
    this.eliminarTareaEvent.emit();
  }
}
