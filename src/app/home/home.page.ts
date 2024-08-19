import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import {AddressSelectorComponent} from '../components/address-selector/address-selector.component'
import { LocationService } from '../services/location.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AddressSelectorComponent],
})

export class HomePage implements OnInit {
  currentLocation: { lat: number; lng: number } = { lat: 0, lng: 0 };

  constructor(private locationService: LocationService, private platform: Platform) {}

  async ngOnInit() {
    try {
      await this.platform.ready()
      this.currentLocation = await this.locationService.getCurrentPosition()
    } catch(err) {
      console.error('Error getting location', err);
      alert('Konum alınamadı. Lütfen izin verdiğinizden emin olun.');
    }
  }
}
