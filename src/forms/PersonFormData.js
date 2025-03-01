const FormData = require("./../../sevo/forms/FormData");


class PersonFormData extends FormData{
    constructor(params) {
        super(params);
    }
}

// const formData = new PersonFormData({firstname: "", lastname: "", birthday: ""});

// console.log(formData.getFields());
// console.log("isValid: ", formData.isValid());
// formData.init({firstname: "Seppel", lastname: "Vogt", birthday: "27.08.1981"});
// console.log(formData.getFields());
// console.log("isValid: ", formData.isValid());

// console.log(formData.getField("firstname").value);

module.exports = PersonFormData;

