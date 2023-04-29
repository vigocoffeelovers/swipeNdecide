import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'swiper',
    loadComponent: () => import('./pages/swiper/swiper.page').then( m => m.SwiperPage)
  },

];
