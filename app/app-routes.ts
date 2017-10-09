import { provideRouter, RouterConfig } from '@angular/router'; 
import { ComponentRoutes } from './components/routes';

export const routes: RouterConfig = [
	...ComponentRoutes
]; 

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];