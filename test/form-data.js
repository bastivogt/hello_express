const PersonModel = require("./../src/models/PersonModel");

class ModelFormData {
    static ALL = "__all";
    model;
    includeFields;
    excludeFields;
    constructor() {
        this.model = null;
        this.excludeFields = null;
        this.includeFields = null;
    }



}


class PersonModelFormData extends ModelFormData {
    constructor() {
        super();
        this.model = PersonModel;
        this.includeFields = ModelFormData.ALL;
        this.excludeFields = ["id", "createdAt", "updatedAt"];

        //this.modelFields = ["firstname", "lastname"];
        this._fields = {};
        //console.log("model", this.model);
        //console.log(this.model.getAttributes());
        this.generateFields();
        console.log(this._fields);
    }

    generateFields() {
        for(const prop in this.model.getAttributes()) {
            if(this.includeFields === "__all") {
                this._fields[prop] = {value: "", error: null}
            }else {
                for(const field of this.modelFields) {
                    if(field === prop) {
                        this._fields[prop] = {value: "", error: null}
                    }
                }
            }
        }
        
        if(this.excludeFields) {
            console.log("kkkkkkkkkkkkk");
            for(const prop of this.excludeFields) {
                delete this._fields[prop];
            }
        }
    }
}




class FormData {
    constructor(params) {
        this._params = params;
        this._fields = {}
        this._createFields();
    }

    getField(name) {
        return this._fields[name];
    }

    getFields() {
        return this._fields;
    }

    validateOfEmpty() {
        for(const prop in this._fields) {
            if(this._fields[prop].value === "" || this._fields[prop].value === null) {
                this._fields[prop].error = true;
            }
        }
    }

    _createFields() {
        for(const prop in this._params) {
            this._fields[prop] = {value: this._params[prop], error: false}
        }
    }


}


class PersonFormData extends FormData{
    constructor(params) {
        super(params);
    }
}


const formData = new PersonFormData({firstname: "Sebastian", lastname: "", birthday: "27.02.1981"});
formData.validateOfEmpty();
console.log(formData.getFields());



//const formData = new PersonModelFormData();