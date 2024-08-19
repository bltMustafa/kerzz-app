import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { restaurantReducer } from './app/store/restaurant/restaurant.reducer';
import { RestaurantEffects } from './app/store/restaurant/restaurant.effects';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideStore({ restaurant: restaurantReducer }),
    provideEffects([RestaurantEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
});
