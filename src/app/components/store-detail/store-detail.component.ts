import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { selectRestaurantById } from '../../store/restaurant/restaurant.actions';
import { selectSelectedRestaurant } from '../../store/restaurant/restaurant.selectors';
import { RestaurantState } from '../../store/restaurant/restaurant.reducer';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class StoreDetailComponent implements OnInit {
  storeInfo$ = this.store.select(selectSelectedRestaurant);
  storeId: string = '';

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ restaurant: RestaurantState }>,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('id') || '';
    this.store.dispatch(selectRestaurantById({ storeId: this.storeId }));
  }

  goBack() {
    this.navCtrl.back();
  }

}
