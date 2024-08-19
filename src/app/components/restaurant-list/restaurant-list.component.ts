import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { LocationService } from '../../services/location.service';
import * as RestaurantActions from '../../store/restaurant/restaurant.actions';
import { selectAllRestaurants, selectRestaurantError } from '../../store/restaurant/restaurant.selectors';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<any[]>;
  error$: Observable<string | null>;
  favoriteIds: Set<number> = new Set<number>();
  loading: boolean = true;

  limit: number = 0;
  skip: number = 0;
  totalRestaurants: number = 0;

  constructor(private store: Store, private locationService: LocationService, private router: Router) {
    this.restaurants$ = this.store.pipe(select(selectAllRestaurants));
    this.error$ = this.store.pipe(select(selectRestaurantError));
  }

  ngOnInit() {
    this.restaurants$.subscribe(restaurants => {
      this.totalRestaurants = restaurants.length;
      this.loading = false;
    });

    this.loadRestaurants();
  }

  async loadRestaurants() {
    this.loading = true;

    try {
      const position = await this.locationService.getCurrentPosition();
      this.store.dispatch(RestaurantActions.loadRestaurants({
        lat: position.lat,
        lng: position.lng,
        limit: this.limit,
        skip: this.skip
      }));
    } catch (error) {
      console.error('Error getting location:', error);
      alert('Konum alınırken bir hata oluştu. Lütfen konum izinlerinizi kontrol edin.'); // Kullanıcıya hata mesajı göster
    } finally {
      this.loading = false;
    }
  }

  toggleFavorite(restaurantId: number) {
    if (this.favoriteIds.has(restaurantId)) {
      this.favoriteIds.delete(restaurantId);
    } else {
      this.favoriteIds.add(restaurantId);
    }
  }

  isFavorite(restaurantId: number): boolean {
    return this.favoriteIds.has(restaurantId);
  }

  async loadMore(event: any) {
    this.skip += this.limit;

    try {
      const position = await this.locationService.getCurrentPosition();

      this.store.dispatch(RestaurantActions.loadRestaurants({
        lat: position.lat,
        lng: position.lng,
        limit: this.limit,
        skip: this.skip
      }));

      event.target.complete();

      if (this.totalRestaurants < this.skip + this.limit) {
        event.target.disabled = true;
      }

    } catch (error) {
      console.error('Error loading more restaurants:', error);
      event.target.complete();
    }
  }

  navigateToStore(storeId: string) {
    this.router.navigate(['/store', storeId]);
  }

}
