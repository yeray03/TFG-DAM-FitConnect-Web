import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rutinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rutinas.html',
  styleUrl: './rutinas.scss'
})
export class RutinasComponent {
  // Datos simulados (mock data)
  rutinas = [
    { id: 1, nombre: 'Rutina Fuerza Inicial', nivel: 'Principiante', objetivo: 'Hipertrofia' },
    { id: 2, nombre: 'Full Body Avanzado', nivel: 'Avanzado', objetivo: 'Fuerza' },
  ];
}