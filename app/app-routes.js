"use strict";
var router_1 = require('@angular/router');
var routes_1 = require('./components/routes');
exports.routes = routes_1.ComponentRoutes.slice();
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app-routes.js.map