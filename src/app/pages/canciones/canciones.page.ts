import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CancionesService, Cancion } from '../../services/canciones';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.page.html',
  styleUrls: ['./canciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonFab,
    IonFabButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class CancionesPage implements OnInit {

  canciones: Cancion[] = [];

  constructor(
    private cancionesService: CancionesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargar();
  }

  ionViewWillEnter() {
    this.cargar();
  }

  async cargar() {
    this.canciones = await this.cancionesService.listar();
  }

  async eliminarCancion(id: number) {
    await this.cancionesService.eliminar(id);
    await this.cargar();
  }

  editarCancion(cancion: Cancion) {
    this.router.navigate(['/cancion-form', cancion.id]);
  }

  agregarCancion() {
    this.router.navigate(['/cancion-form']);
  }
}