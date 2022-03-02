import { AppRoutes } from 'react-spa-middleware';
import { Observable } from 'rxjs';
import { GetRocketsQuery } from './graphql/generatedModel';
import { IRocketsProps } from './pages/rockets/rockets.page';
import { rocketService } from './services/rockets/rockets.service';

export const routes: AppRoutes = [
  {
    name: 'unauthorized',
    path: '.',
    component: () => import('./layouts/unauthorized/unauthorized.layout'),
  },
  {
    name: 'unauthorized.login',
    path: '/',
    component: () => import('./pages/login/login.page'),
  },
  {
    name: 'authorized',
    path: '~/',
    canActivate: (router) => () => {
      const user = sessionStorage.getItem('user');
      if (user === 'authorized') {
        return true;
      } else {
        router.navigate('unauthorized.login');
        return false;
      }
    },
    component: () => import('./layouts/authorized/authorized.layout'),
  },
  {
    name: 'authorized.rockets',
    path: 'rockets',
    component: () => import('./pages/rockets/rockets.page'),
    resolve: () => {
      return { data: rocketService.getRockets() } as Pick<
        IRocketsProps<Observable<GetRocketsQuery>>,
        'data'
      >;
    },
  },
];
