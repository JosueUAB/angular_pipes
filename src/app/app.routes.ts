import { Routes } from '@angular/router';
import { FechaComponent } from './fecha/fecha.component';
import { GatosComponent } from './gatos/gatos.component';
import { LetrasComponent } from './letras/letras.component';
import { EjemplojsonComponent } from './pages/ejemplojson/ejemplojson.component';

export const routes: Routes = [
  {path:'',component:GatosComponent},

  {path:'fechas',component:FechaComponent},
  {path:'gatos',component:GatosComponent},
  {path:'pipes',component:LetrasComponent},
  {path:'json',component:EjemplojsonComponent},
  {path:'**',component:GatosComponent},
];
