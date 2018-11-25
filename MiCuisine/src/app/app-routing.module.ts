import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'InsertarReceta', loadChildren: './insertar-receta/insertar-receta.module#InsertarRecetaPageModule' },
  { path: 'InsertarReceta/:idReceta', loadChildren: './insertar-receta/insertar-receta.module#InsertarRecetaPageModule' },
  { path: 'mostrarReceta/:idReceta', loadChildren: './mostrar-receta/mostrar-receta.module#MostrarRecetaPageModule' },
  { path: 'listaCategoria', loadChildren: './lista-categoria/lista-categoria.module#ListaCategoriaPageModule' },
  { path: 'listaRecetas', loadChildren: './lista-recetas/lista-recetas.module#ListaRecetasPageModule' },
  { path: 'listaRecetas/:idCategoria', loadChildren: './lista-recetas/lista-recetas.module#ListaRecetasPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
