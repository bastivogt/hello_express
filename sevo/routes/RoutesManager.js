const express = require("express");
const Route = require("./Route");

class RoutesManager {
    constructor() {
        this._routes = [];
        //this._router = express.Router();
        this._router = null;
        
    }


    static _instance = null;

    static getRoutesManager() {
        if(!RoutesManager._instance) {
            RoutesManager._instance = new RoutesManager();
        }
        return RoutesManager._instance;
    }



    hasRoute(name) {
        for(const item of this._routes) {
            if(item.name === name) {
                return true;
            }
        }
        return false;
    }


    addRoute(route) {
        if(!this.hasRoute(route.name)) {
            this._routes.push(route);
            return true;
        }
        return false;
    }


    removeRoute(name) {
        if(this.hasRoute(name)) {
            for(let i = 0; i < this._routes.length; i ++) {
                if(this._routes[i].name === name) {
                    this._routes.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }


    getRoute(name) {
        if(this.hasRoute(name)) {
            for(const item of this._routes) {
                if(item.name === name) {
                    return item;
                }
            }
        }
        return false;
    }

    getRoutes() {
        return this._routes;
    }

    // getRoutePattern(name, param = null) {
    //     const route = this.getRoute(name);
    //     if (!route) return false;
    //     if (param === null) {
    //         return route.pattern;
    //     }
    //     return route.pattern.split(":")[0] + `${param}`;
    // }

    getRoutePath(name, params = null) {
        // console.log("GET_ROUTE_PATH");
        const route = this.getRoute(name);
        if(!route) return false;
        const pattern = route.pattern;
        let path = pattern;
        if(params === null) {
            return pattern;
        }
        for(let p in params) {
            path = path.replaceAll(`:${p}`, params[p]);
        }
        return path;
    }

    clear() {
        this._routes = [];
        this._router = express.Router();
    }

    createRouter() {
        this._router = express.Router();
        for(const route of this._routes) {
            // router.get("/greeting/:name", HomeController.greeting);
            this._router[route.method](route.pattern, route.action);
        }
    }

    getRouter() {
        return this._router;
    }


    _merge(routesManager) {
        this._routes = this._routes.concat(routesManager._routes);
    }
}



module.exports = RoutesManager;