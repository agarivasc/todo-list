// lista-tareas.component.ts
import { Component, OnInit } from '@angular/core';
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
export class ListaTareasComponent implements OnInit {
  tareas: string[] = [];
  contador: number = 1;
  tareaCompletada: boolean[] = [];

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    const tareasCompletadasGuardadas = localStorage.getItem('tareasCompletadas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
    if (tareasCompletadasGuardadas) {
      this.tareaCompletada = JSON.parse(tareasCompletadasGuardadas);
    }
  }

  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    localStorage.setItem('tareasCompletadas', JSON.stringify(this.tareaCompletada));
  }

  cambiarEstado(index: number) {
    this.tareaCompletada[index] = !this.tareaCompletada[index];
    this.guardarTareas();
  }

  agregarTarea(tarea: string) {
    if (tarea.trim() !== "") {
      this.tareas.push(tarea);
      this.tareaCompletada.push(false);
      this.guardarTareas();
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
    this.tareaCompletada.splice(index, 1);
    this.guardarTareas();
  }
}
