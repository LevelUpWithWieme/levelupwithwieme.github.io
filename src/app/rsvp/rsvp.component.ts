import { Component,OnInit,Renderer2 } from '@angular/core';
import { COLORS } from '../../styles/variables';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', COLORS.lightGray); // or use _variables.$light_purple
  }

  ngOnDestroy(): void {
    // Optional: reset body background when leaving the component
    this.renderer.removeStyle(document.body, 'background-color');
  }

}
