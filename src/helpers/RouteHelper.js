const routesManager = require("../routes/routesManager");
const RoutesManager = require("../../sevo/routes/RoutesManager");
//const routesManager = require("./../routes/HomeRoutes");

class RouteHelper {
    // static url(name, param = null) {
    //     const routes = [
    //         adminRoutesManager.getRoutePattern(name, param),
    //         frontendRoutesManager.getRoutePattern(name, param)
    //     ];

    //     for(let route of routes) {
    //         if(route) {
    //             return route;
    //         }
    //     }
    //     return false;
    // }
    static __url(name, param = null) {
        const rm = RoutesManager.merge(HomeRoutes, PeopleRoutes);
        console.log(rm);
        return rm.getRoutePattern(name, param);
    }

    static url(name, params = null) {
        //return routesManager.getRoutePattern(name, param);
        const rm = RoutesManager.getRoutesManager();
        //return rm.getRoutePattern(name, params);
        return rm.getRoutePath(name, params);
    }
}

module.exports = RouteHelper;
