import { Component, Renderer2 } from '@angular/core';
import { COLORS } from '../../styles/variables';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class ScheduleComponent {

  dayOfEvents = [
    { time: '3:30 PM', title: 'Guest Arrival', icon: '⏰', description: 'Guests are invited to arrive and find their seats before the ceremony.' },
    { time: '4:00 PM', title: 'Ceremony', icon: '💍', description: 'The wedding ceremony begins promptly.' },
    { time: '4:30 PM', title: 'Cocktail Hour', icon: '🥂', description: 'Drinks and appetizers while the couple takes photos.' },
    { time: '5:30 PM', title: 'Reception Dinner', icon: '🍽️', description: 'Join us for a seated dinner and toasts.' },
    { time: '7:00 PM', title: 'Dancing & Celebration', icon: '🎶', description: 'Let’s dance and celebrate the night away!' },
    { time: '10:30 PM', title: 'Send-Off', icon: '🎇', description: 'Farewell to the newlyweds and end of the evening.' }
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', COLORS.lightGray); // or use _variables.$light_purple
  }

  ngOnDestroy(): void {
    // Optional: reset body background when leaving the component
    this.renderer.removeStyle(document.body, 'background-color');
  }

}
