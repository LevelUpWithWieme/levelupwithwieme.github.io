import { Component, Renderer2 } from '@angular/core';
import { COLORS } from '../../styles/variables';

@Component({
  selector: 'app-weddingparty',
  standalone: true,
  imports: [],
  templateUrl: './weddingparty.component.html',
  styleUrl: './weddingparty.component.scss'
})
export class WeddingpartyComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', COLORS.lightGray); // or use _variables.$light_purple
  }

  ngOnDestroy(): void {
    // Optional: reset body background when leaving the component
    this.renderer.removeStyle(document.body, 'background-color');
  }
}
