import { Component, Renderer2 } from '@angular/core';
import { COLORS } from '../../styles/variables';

@Component({
  selector: 'app-ourstory',
  standalone: true,
  imports: [],
  templateUrl: './ourstory.component.html',
  styleUrl: './ourstory.component.scss'
})
export class OurstoryComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', COLORS.lightPurple); // or use _variables.$light_purple
  }

  ngOnDestroy(): void {
    // Optional: reset body background when leaving the component
    this.renderer.removeStyle(document.body, 'background-color');
  }
}
