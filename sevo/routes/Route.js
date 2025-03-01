class Route {
    static GET = "get";
    static PUT = "put";
    static DELETE = "delete";
    static PATCH = "patch";
    static POST = "post";
    static USE = "use";

    constructor(method="get", pattern="", action=null, name=null) {
        this.method = method;
        this.pattern = pattern;
        this.action = action;
        this.name = name;
    }
}

module.exports = Route;



