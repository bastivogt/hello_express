class BaseController {
    static _instance = null;
    static getInstance() {
        if (!this._instance) {
            this._instance = new this();
            return this._instance;
        }
        return this._instance;
    }
}

module.exports = BaseController;
