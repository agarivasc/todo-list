import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  tareas: string[] = [];
  contador: number = 1;
  tareaCompletada: boolean[] = Array(this.tareas.length).fill(false);

  cambiarEstado(index: number) {
    this.tareaCompletada[index] = !this.tareaCompletada[index];
  }
}
