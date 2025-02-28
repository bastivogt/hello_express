const HomeRoutes = require("./../routes/HomeRoutes");
const PeopleRoutes = require("./../routes/PeopleRoutes");
const RoutesManager = require("./../../sevo/routes/RoutesManager")

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
    static url(name, param = null) {
        const rm = RoutesManager.merge(
            HomeRoutes,
            PeopleRoutes
        );
        console.log(rm);
        return rm.getRoutePattern(name, param);

    }
}

module.exports = RouteHelper;
