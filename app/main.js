"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var http_util_services_1 = require('./services/http-util-services');
var app_routes_1 = require('./app-routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, http_util_services_1.HttpUtilServices, app_routes_1.APP_ROUTER_PROVIDERS]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map