import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. IMPORTAR ESTO

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // 2. AÑADIR A IMPORTS
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  // 3. DEFINIR LOS DATOS SIMULADOS
  agenda = [
    { id: 101, cliente: 'María García', hora: '10:00 AM', actividad: 'Entrenamiento Funcional' },
    { id: 102, cliente: 'Juan Pérez', hora: '12:00 PM', actividad: 'Fuerza Pierna' }
  ];
}