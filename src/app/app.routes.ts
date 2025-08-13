import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TravelComponent } from './travel/travel.component';
import { WeddingpartyComponent } from './weddingparty/weddingparty.component';

export const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'faq', component: FaqComponent },
{ path: 'gallery', component: GalleryComponent },
{ path: 'ourstory', component: OurstoryComponent },
{ path: 'registry', component: RegistryComponent },
{ path: 'rsvp', component: RsvpComponent },
{ path: 'schedule', component: ScheduleComponent },
{ path: 'travel', component: TravelComponent },
{ path: 'weddingparty', component: WeddingpartyComponent },];
