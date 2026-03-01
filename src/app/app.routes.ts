import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

export const routes: Routes = [
  // 1. RUTAS PÚBLICAS
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'contact', component: Contact },
    ],
  },
  { path: 'login', component: Login },

  // 2. RUTAS DE ADMINISTRACIÓN (Con Layout específico)
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./pages/admin/clientes/clientes').then((m) => m.ClientesComponent),
      },
      {
        path: 'rutinas',
        loadComponent: () =>
          import('./pages/admin/rutinas/rutinas').then((m) => m.RutinasComponent),
      },
      // CORRECCIÓN: Se quita el prefijo 'admin/' porque ya estamos bajo ese path padre
      {
        path: 'entrenamiento/:id',
        loadComponent: () =>
          import('./pages/admin/detalle-entrenamiento/detalle-entrenamiento').then((m) => m.DetalleEntrenamiento),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  // 3. RUTA COMODÍN (Debe ir al final)
  { path: '**', redirectTo: '' },
];