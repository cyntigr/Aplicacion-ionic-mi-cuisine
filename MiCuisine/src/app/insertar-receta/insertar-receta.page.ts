import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta/receta';
import { ServicesService } from '../services/services.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar-receta',
  templateUrl: './insertar-receta.page.html',
  styleUrls: ['./insertar-receta.page.scss'],
})
export class InsertarRecetaPage implements OnInit {

    receta: Receta;
    edit = false;
    constructor(private servicesService: ServicesService,
      private navController: NavController,
      private activatedRoute: ActivatedRoute) {
  
      this.receta = {
        idReceta: this.servicesService.contadorRecetas,
        idCategoria: '',
        nombreReceta: '',
        numeroPersonas: null ,
        duracion:'',
        ingredientes: '',
        preparacion: '',
        consejos: ''
      };
    }
    ngOnInit() {
      const idReceta = this.activatedRoute.snapshot.paramMap.get('idReceta');
      
      if (idReceta) {
        this.edit = true;
        this.receta = this.servicesService.getRecetaById(+idReceta);
      }
    }
    saveReceta(t: Receta) {
      if (this.edit) {
        this.servicesService.saveReceta(this.receta).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar:' + error));
      } else {
        this.servicesService.newReceta(this.receta).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar:' + error));
      }
    }
  }