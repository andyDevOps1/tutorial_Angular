import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Introduccion } from './introduccion/introduccion';
import { Instalacion } from './instalacion/instalacion';
import { Uso } from './uso/uso';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'introduccion', component: Introduccion },
  { path: 'instalacion', component: Instalacion },
  { path: 'uso', component: Uso },
];


