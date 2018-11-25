import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Receta } from '../receta/receta';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-mostrar-receta',
  templateUrl: './mostrar-receta.page.html',
  styleUrls: ['./mostrar-receta.page.scss'],
})
export class MostrarRecetaPage implements OnInit {

  recetas: Receta;
  constructor(private activatedRoute : ActivatedRoute,
  private servicesService: ServicesService,
  private navController : NavController){
  }
  ngOnInit(){const idReceta = this.activatedRoute.snapshot.paramMap.get('idReceta');
  this.recetas = this.servicesService.getRecetaById(+idReceta);
}
  
  editReceta(idReceta: number){
    this.navController.navigateForward('/InsertarReceta/' + idReceta);
  }
}
