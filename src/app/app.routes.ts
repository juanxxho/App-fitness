import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'ofertas',
    loadComponent: () =>
      import('./pages/ofertas/ofertas.component').then(
        (m) => m.OfertasComponent
      ),
  },
  {
    path: 'entrenadores',
    loadComponent: () =>
      import('./pages/entrenadores/entrenadores.component').then(
        (m) => m.EntrenadoresComponent
      ),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.component').then((m) => m.PerfilComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'calculadora',
    loadComponent: () =>
      import('./pages/calculadora/calculadora.component').then(
        (m) => m.CalculadoraComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
