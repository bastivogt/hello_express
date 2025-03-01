console.log("extern.js");

class Test {
    static _instance = null;
    static _count = 1;
    constructor(id) {
        console.log("Hello form Test");
        this.id = id;
    }


    static getInstance() {
        if(!this._instance) {
            this._instance = new this(this._count);
            this._count ++;
        }
        return this._instance;
    }
}


module.exports = Test;