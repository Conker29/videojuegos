import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'canciones',
    pathMatch: 'full'
  },
  {
    path: 'canciones',
    loadComponent: () =>
      import('./pages/canciones/canciones.page')
        .then(m => m.CancionesPage)
  },
  {
    path: 'cancion-form',
    loadComponent: () =>
      import('./pages/cancion-form/cancion-form.page')
        .then(m => m.CancionFormPage)
  },
  {
    path: 'cancion-form/:id',
    loadComponent: () =>
      import('./pages/cancion-form/cancion-form.page')
        .then(m => m.CancionFormPage)
  }
];