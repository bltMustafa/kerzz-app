import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RestaurantState } from './restaurant.reducer';

export const selectRestaurantState = createFeatureSelector<RestaurantState>('restaurant');

export const selectAllRestaurants = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.restaurants
);

export const selectRestaurantError = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.error
);

export const selectSelectedRestaurant = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.selectedRestaurant
);
