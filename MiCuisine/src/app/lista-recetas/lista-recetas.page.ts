import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta/receta';
import { ServicesService } from '../services/services.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.page.html',
  styleUrls: ['./lista-recetas.page.scss'],
})
export class ListaRecetasPage implements OnInit {

  listaRecetas: Receta[] = [];
  cat: string;
  constructor(private servicesService: ServicesService,
    private alertController: AlertController,
    private navController: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cat = this.activatedRoute.snapshot.paramMap.get('idCategoria');
    console.log(this.cat);
  }
  ionViewWillEnter() {
    this.servicesService.getRecetas().then(
      data => this.listaRecetas = data.filter(t => t.idCategoria == this.cat)
    );
  }
  async deleteDialog(idReceta: number) {
    const alert = await this.alertController.create({
      header: 'Borrar receta',
      message: '¿Estas seguro de borrar la receta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.servicesService.deleteReceta(idReceta).then(
              () => this.servicesService.getRecetas().then(
                data => this.listaRecetas = data)
            );
            console.log('Confirmar');
          }
        }
      ]
    });
    await alert.present();
  }
  mostrar(idReceta: number){
      this.navController.navigateForward('/mostrarReceta/' + idReceta);
  }
}
