class Route {
    constructor(method="get", pattern="", action=null, name=null) {
        this.method = method;
        this.pattern = pattern;
        this.action = action;
        this.name = name;
    }
}

module.exports = Route;



