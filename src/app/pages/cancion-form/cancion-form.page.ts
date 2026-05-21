import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon // 1. Agregamos IonIcon aquí
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CancionesService, Cancion } from '../../services/canciones';

// 2. Importamos las herramientas de ionicons para cargar el ícono de play
import { addIcons } from 'ionicons';
import { playCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.page.html',
  styleUrls: ['./cancion-form.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon // 3. Lo metemos en los imports del componente
  ]
})
export class CancionFormPage implements OnInit {

  id?: number;

  cancion: Cancion = {
    detalle: '',
    imagen_url: '',
    video_url: '',
    audio_url: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cancionesService: CancionesService
  ) {
    // 4. Registramos el ícono específico en el constructor
    addIcons({ playCircleOutline });
  }

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = Number(idParam);
      this.cancion = await this.cancionesService.obtenerPorId(this.id);
    }
  }

  async guardar() {
    if (!this.cancion.detalle) {
      alert('Completa los campos obligatorios');
      return;
    }

    if (this.id) {
      await this.cancionesService.actualizar(this.id, this.cancion);
    } else {
      await this.cancionesService.crear(this.cancion);
    }

    this.router.navigate(['/canciones']);
  }
}