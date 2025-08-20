import { Component,OnInit,Renderer2 } from '@angular/core';
import { NgFor } from '@angular/common';
import { COLORS } from '../../styles/variables';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'] // <-- plural
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

  constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
      this.renderer.setStyle(document.body, 'background-color', COLORS.darkGray); // or use _variables.$light_purple
    }

    ngOnDestroy(): void {
      // Optional: reset body background when leaving the component
      this.renderer.removeStyle(document.body, 'background-color');
    }
}
