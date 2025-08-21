import { Component, Renderer2 } from '@angular/core';
import { COLORS } from '../../styles/variables';
import { SafeUrlPipe } from '../safe-url.pipe';
import { NgFor, NgIf } from '@angular/common';
import { link } from 'fs';

@Component({
  selector: 'app-travel',
  standalone: true,              // 👈 mark it standalone
  imports: [SafeUrlPipe, NgFor],        // 👈 add SafeUrlPipe here
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {
  venue = {
    name: 'The Historic German House',
    address: '315 Gregory Street, Rochester, NY 14620',
    mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.956783438238!2d-77.5968268845422!3d43.15017697914403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b93460f0c19f%3A0x9eaa4a824361311e!2s315%20Gregory%20St%2C%20Rochester%2C%20NY%2014620!5e0!3m2!1sen!2sus!4v1692543085301!5m2!1sen!2sus'
  };

  hotels = [
    {
      name: 'Super 8 by Wyndham – Henrietta',
      distance: 'Henrietta – 15 min drive',
      link: 'https://www.wyndhamhotels.com/super-8/henrietta-new-york/super-8-henrietta-rochester-area/overview'
    },
    {
      name: 'Holiday Inn Express – Greece (Ridge Rd)',
      distance: 'Greece – 15 min drive',
      link: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/rochester/rocex/hoteldetail'
    },
    {
      name: 'Hyatt Regency Rochester',
      distance: 'Downtown – 5 min drive',
      link: 'https://www.hyatt.com/en-US/hotel/new-york/hyatt-regency-rochester/roche'
    },
    {
      name: 'Hilton Garden Inn Rochester Downtown',
      distance: 'Downtown – 5 min drive',
      link: 'https://www.hilton.com/en/hotels/rocemgi-hilton-garden-inn-rochester-downtown/'
    },
    {
      name: 'Inn on Broadway',
      distance: 'Boutique hotel – 5 min drive',
      link: 'https://innonbroadway.com/'
    }
  ];

  travelInfo = [
    'Closest airport: Greater Rochester International Airport (ROC) – 15 min from downtown.',
    'Rideshare (Uber/Lyft) + taxis are available citywide.',
    'Parking available at the venue, as well as street parking and P&J down the road on South Ave.'
  ];

  thingsToDo = [
    {
      name: 'Rochester Museum & Science Center',
      description: 'Hands-on exhibits, lightning shows, Science on a Sphere.',
      link: 'https://www.rmsc.org/'
    },
    {
      name: 'Strong National Museum of Play',
      description: 'Interactive museum with toys, video games, and the Toy Hall of Fame.',
      link: 'https://www.museumofplay.org/'
    },
    {
      name: 'Charlotte–Genesee Lighthouse',
      description: 'Oldest active Lake Ontario lighthouse with guided tours and lake views.',
      link: 'https://www.geneseelighthouse.org'
    },
    {
      name: 'Rochester Public Market',
      description: 'Local flavors, stalls, and vibrant weekend market energy.',
      link: 'https://www.cityofrochester.gov/publicmarket/'
    },
    {
      name: 'George Eastman Museum',
      description: 'World’s oldest photography museum in a historic mansion.',
      link: 'https://www.eastman.org/'
    },
    {
      name: 'Susan B. Anthony Museum & House',
      description: 'Historic home and museum on women’s suffrage.',
      link: 'https://susanbanthonyhouse.org/'
    },
    {
      name: 'Rochester Contemporary Art Center (RoCo)',
      description: 'Local art exhibitions and the famous 6×6 community show.',
      link: 'https://rochestercontemporary.org/'
    },
    {
      name: 'Memorial Art Gallery',
      description: '5,000 years of art from around the world in Rochester, NY',
      link: 'https://mag.rochester.edu'
    }
  ];

  budgetEats = [
    {
      name: 'Bill Gray’s',
      description: 'Local chain famous for burgers, hot dogs, and garbage plates (a Rochester MUST try).',
      link: 'https://www.billgrays.com/'
    },
    {
      name: 'Dibella’s Subs',
      description: 'Big, freshly baked subs at a good price.',
      link: 'https://www.dibellas.com/'
    },
    {
      name: 'Carbone’s Pizzeria',
      description: 'Beloved local spot for classic, foldable NY-style pizza — a Rochester staple.',
      link: 'https://www.carbonespizzeria.com/'
    },
    {
      name: "Abbott's Frozen Custard",
      description: "Classic Rochester frozen custard — creamy, rich, and iconic.",
      link: "https://www.abbottscustard.com/"
    }
  ];


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', COLORS.darkGray); // or use _variables.$light_purple
  }

  ngOnDestroy(): void {
    // Optional: reset body background when leaving the component
    this.renderer.removeStyle(document.body, 'background-color');
  }
}
