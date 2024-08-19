import { createAction, props } from '@ngrx/store';

export const loadRestaurants = createAction(
  '[Restaurant] Load Restaurants',
  props<{ lat: number, lng: number, limit: number, skip: number }>()
);

export const loadRestaurantsSuccess = createAction(
  '[Restaurant] Load Restaurants Success',
  props<{ restaurants: any[] }>()
);

export const loadRestaurantsFailure = createAction(
  '[Restaurant] Load Restaurants Failure',
  props<{ error: any }>()
);

export const selectRestaurantById = createAction(
  '[Restaurant] Select Restaurant By Id',
  props<{ storeId: string }>()
);


