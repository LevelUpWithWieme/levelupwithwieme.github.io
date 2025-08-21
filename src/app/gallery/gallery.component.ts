import { Component, Renderer2 } from '@angular/core';
declare var bootstrap: any;
import { COLORS } from '../../styles/variables';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class GalleryComponent {
  images = [
    { src: 'assets/icon1.png', alt: 'Image 1' },
    { src: 'assets/icon2.png', alt: 'Image 2' },
    { src: 'assets/placeholderimg.jpg', alt: 'Image 3' },
    { src: 'assets/crazy.PNG', alt: 'Image 3' },
    { src: 'assets/cuddle.jpeg', alt: 'Image 3' },
    { src: 'assets/Curly.jpg', alt: 'Image 3' },
    { src: 'assets/firstpic.jpeg', alt: 'Image 3' },
    { src: 'assets/Hanna.jpeg', alt: 'Image 3' },
    { src: 'assets/ily.jpg', alt: 'Image 3' },
    { src: 'assets/Jess.JPG', alt: 'Image 3' },
    { src: 'assets/kitty.jpg', alt: 'Image 3' },
    { src: 'assets/Lexi.jpeg', alt: 'Image 3' },
    { src: 'assets/litter.jpeg', alt: 'Image 3' },
    { src: 'assets/meetfriend.jpg', alt: 'Image 3' },
    { src: 'assets/polaroid.JPG', alt: 'Image 3' },
    { src: 'assets/propose.JPG', alt: 'Image 3' },
    { src: 'assets/ring.JPG', alt: 'Image 3' },
    { src: 'assets/Sam.JPEG', alt: 'Image 3' },
    { src: 'assets/skylar.jpg', alt: 'Image 3' },
    { src: 'assets/Sonya.jpg', alt: 'Image 3' },
    { src: 'assets/us.JPG', alt: 'Image 3' }
  ];

  activeIndex = 0;
  lightboxImage: string = '';

  setActive(index: number) {
    this.activeIndex = index;
  }

  openLightbox(imgSrc: string) {
    this.lightboxImage = imgSrc;
    const modalEl = document.getElementById('galleryLightbox');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
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

