import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.scss'
})
export class RegistryComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // This is where you can add any additional logic after the view has been initialized
    // For example, you could initialize a third-party library or manipulate the DOM
    if (!document.querySelector('script[src="https://widget.zola.com/js/widget.js"]')) {
      const script = this.renderer.createElement('script');
      script.src = 'https://widget.zola.com/js/widget.js';
      script.async = true;
      this.renderer.appendChild(document.body, script);
    } else {
      // If it's already loaded, manually trigger the Zola script again
      if ((window as any).Zola) {
        (window as any).Zola.render();
      }
    }
  }



}
