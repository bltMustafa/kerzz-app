import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GreetingComponentComponent } from "../greeting-component/greeting-component.component"
import { LocationService } from '../../services/location.service';


@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html',
  styleUrls: ['./address-selector.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, GreetingComponentComponent],
})
export class AddressSelectorComponent implements OnInit {
  addresses: { name: string }[] = [
    { name: '' },
  ];

  selectedAddress: string = this.addresses[0].name;
  currentLocation: { lat: number; lng: number } = { lat: 0, lng: 0 };

  constructor(
    private alertController: AlertController,
    private locationService: LocationService
  ) {}

  async ngOnInit() {
    try {
      this.currentLocation = await this.locationService.getCurrentPosition();
      const mockAddress = `${this.currentLocation.lat.toFixed(2)} / ${this.currentLocation.lng.toFixed(2)}`;
      this.addresses.push({ name: mockAddress });
    } catch (err) {
      console.error('Konum alınamadı:', err);
    }
  }
}
