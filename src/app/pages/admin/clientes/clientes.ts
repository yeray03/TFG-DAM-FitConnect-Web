import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss'
})
export class ClientesComponent {
isModalOpen = false;

newCliente = { nombre: '', email: '', plan: 'Básico' };

  clientes = [
    { nombre: 'María García', email: 'maria@email.com', plan: 'Premium' },
    { nombre: 'Juan Pérez', email: 'juan@email.com', plan: 'Básico' },
    { nombre: 'Ana López', email: 'ana@email.com', plan: 'Premium' },
    { nombre: 'Carlos Ruiz', email: 'carlos@email.com', plan: 'Básico' },
  ];

openModal() {
    this.isModalOpen = true;
  }

closeModal() {
    this.isModalOpen = false;
  }

addCliente() {
    if (this.newCliente.nombre && this.newCliente.email) {
      this.clientes.push({ ...this.newCliente });
      this.newCliente = { nombre: '', email: '', plan: 'Básico' };
      this.closeModal();
    }
  }
  
deleteCliente(index: number) {
    this.clientes.splice(index, 1);
  }

}