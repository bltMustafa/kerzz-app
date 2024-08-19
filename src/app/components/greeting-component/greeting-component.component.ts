import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';



@Component({
  selector: 'app-greeting-component',
  templateUrl: './greeting-component.component.html',
  styleUrls: ['./greeting-component.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RestaurantListComponent],
})
export class GreetingComponentComponent  implements OnInit {
  greetingMessage: string = 'Günaydın';
  greetingIcon: string = 'sunny-outline';

  constructor() { }

  ngOnInit() {
    this.updateGreeting();
  }

  updateGreeting() {
    const hour = new Date().getHours()
    console.log(hour)

    const greetings = [
      { start: 6, end: 12, message: 'Günaydın', icon: 'sunny-outline' },
      { start: 12, end: 18, message: 'Tünaydın', icon: 'partly-sunny-outline' },
      { start: 18, end: 21, message: 'İyi Akşamlar', icon: 'moon-outline' },
      { start: 21, end: 6, message: 'İyi Geceler', icon: 'moon-outline' }
    ];

    const greeting = greetings.find(g =>
      hour >= g.start && hour < g.end ||
      (g.start > g.end && (hour >= g.start || hour < g.end))
    );

    if (greeting) {
      this.greetingMessage = greeting.message;
      this.greetingIcon = greeting.icon;
    }
  }
}
