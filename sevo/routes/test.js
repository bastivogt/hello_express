const pattern = "/sport/:kurs/:id";



function getPath(pattern, params=null) {
    console.log("pattern", pattern);
    console.log("params", params);
    let path = pattern;
    if(params) {
        for(let p in params) {
            console.log(p, params[p]);
            path = path.replaceAll(`:${p}`, params[p]);
        }
    }
    return path;
}

console.log(getPath(pattern, {kurs: "Kickboxen", id: 7}));