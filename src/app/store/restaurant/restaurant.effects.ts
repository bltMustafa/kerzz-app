import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";

import {FeedService} from "../../services/feed.service";
import * as RestaurantActions from "./restaurant.actions";


@Injectable()
export class RestaurantEffects {

  loadRestaurants$ = createEffect(() => this.actions$.pipe(
    ofType(RestaurantActions.loadRestaurants),
    mergeMap(action => this.feedService.getFeed(action.lat, action.lng, action.skip, action.limit).pipe(
      map(response => {
        console.log("API Yanıtı:", response);
        return RestaurantActions.loadRestaurantsSuccess({restaurants: response.response});
      }),
      catchError(error => of(RestaurantActions.loadRestaurantsFailure({error}))),
    )),
  ));

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {}
}
