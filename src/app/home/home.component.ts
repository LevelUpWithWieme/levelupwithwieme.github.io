import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countdownDate = new Date('2028-11-04T16:00:00').getTime();
  intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update HTML
      const daysEl = document.getElementById('days') as HTMLElement;
      const hoursEl = document.getElementById('hours') as HTMLElement;
      const minutesEl = document.getElementById('minutes') as HTMLElement;
      const secondsEl = document.getElementById('seconds') as HTMLElement;

      if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
      }

      // If the countdown is over, show a message
      if (distance < 0) {
        clearInterval(this.intervalId);
        const countdownEl = document.querySelector('.countdown') as HTMLElement;
        if (countdownEl) countdownEl.innerText = 'Our Wedding Day is Here!';
      }
    }, 1000);
  }
}
