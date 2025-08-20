import { Component,OnInit,Renderer2 } from '@angular/core';
import { COLORS } from '../../styles/variables'; // Adjust the import path as necessary

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
      this.renderer.setStyle(document.body, 'background-color', COLORS.lightPurple); // or use _variables.$light_purple
    }

    ngOnDestroy(): void {
      // Optional: reset body background when leaving the component
      this.renderer.removeStyle(document.body, 'background-color');
    }
}
