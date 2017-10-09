import { bootstrap }    from '@angular/platform-browser-dynamic'
import { AppComponent } from './app.component'
import { HTTP_PROVIDERS } from '@angular/http'
import { HttpUtilServices } from './services/http-util-services'
import { APP_ROUTER_PROVIDERS } from './app-routes';


bootstrap(AppComponent,[HTTP_PROVIDERS,HttpUtilServices,APP_ROUTER_PROVIDERS]).catch(err => console.error(err))

