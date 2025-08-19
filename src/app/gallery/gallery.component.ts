import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Import NgFor

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    { src: 'assets/icon1.png', alt: 'Image 1' },
    { src: 'assets/icon2.png', alt: 'Image 2' },
    { src: 'assets/placeholderimg.jpg', alt: 'Image 3' }
  ];

  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }

  onSlide(event: any) {
    this.activeIndex = event.to;
  }
}