import { createReducer, on } from '@ngrx/store';
import * as RestaurantActions from './restaurant.actions';

export interface RestaurantState {
  restaurants: any[];
  selectedRestaurant: any | null;
  error: string | null;
}

export const initialState: RestaurantState = {
  restaurants: [],
  selectedRestaurant: null,
  error: null
};

export const restaurantReducer = createReducer(
  initialState,
  on(RestaurantActions.loadRestaurantsSuccess, (state, { restaurants }) => {
    return {
      ...state,
      restaurants: [...state.restaurants, ...restaurants],
      error: null
    };
  }),
  on(RestaurantActions.selectRestaurantById, (state, { storeId }) => {
    const selectedRestaurant = state.restaurants.find(store => {
      return store.id === storeId;
    }) || null;
    return {
      ...state,
      selectedRestaurant: selectedRestaurant
    };
  }),
);
