import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.page.html',
  styleUrls: ['./lista-categoria.page.scss'],
})
export class ListaCategoriaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}
  mostrarRecetas(idCategoria: string){
    this.navController.navigateForward('/listaRecetas/' + idCategoria);
  }
}
