import { Injectable } from '@angular/core';
import { Receta } from '../receta/receta';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  recetas: Receta[] = [];
  contadorRecetas = 0;

  constructor(private storage: Storage) {}
  
  getRecetas(): Promise<Receta[]> {
    this.storage.get('contadorRecetas').then(
      data => {this.contadorRecetas = data} 
    );
    return this.storage.get('recetas').then((data) => {
      if (data) {
        this.recetas = data;
      }
      return data;}
    );
  }
  saveReceta(t): Promise<Receta[]> {
    if (t.idReceta) {
      this.recetas[this.recetas.findIndex(receta => receta.idReceta === t.idReceta)] = t;
    }
    return this.storage.set('recetas', this.recetas);
  }
  deleteReceta(idReceta: number): Promise<Receta[]> {
    this.recetas = this.recetas.filter(t => t.idReceta != idReceta);
    return this.storage.set('recetas', this.recetas);
  }
  getRecetaById(id: number): Receta {
    return this.recetas.find(t => t.idReceta === id);
  }
  newReceta(t): Promise<Receta[]> {
    t.id = this.contadorRecetas;
    this.recetas.push(t);
    this.contadorRecetas++;
    return this.storage.set('recetas', this.recetas).then(
      () => this.storage.set('contadorRecetas', this.contadorRecetas));
  }
}
