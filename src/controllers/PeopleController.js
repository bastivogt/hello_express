const BaseController = require("../../sevo/controllers/BaseController");
const PersonModel = require("../models/PersonModel");
//const RoutesManager = require("./../../sevo/routes/RoutesManager");
const RouteHelper = require("../helpers/RouteHelper");
const StringUtils = require("../../sevo/utils/StringUtils");
const PersonFormData = require("./../forms/PersonFormData");

class PeopleController extends BaseController {
    async index(req, res, next) {
        const people = await PersonModel.findAll({
            where: {
                published: true,
            },
        });
        //console.log(people);
        res.render("people/index", {
            title: "People",
            people: people,
        });
    }

    async detail(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        const person = await PersonModel.findByPk(id);
        if (person) {
            return res.render("people/detail", {
                title: `${person.firstname} ${person.lastname}`,
                person: person,
                referrer: req.get("referrer"),
            });
        }
        next();
    }

    async create(req, res, next) {
        const formData = new PersonFormData({
            firstname: "",
            lastname: "",
            birthday: "",
        });
        console.log(formData.getFields());
        if (req.method === "POST") {
            //const rm = RoutesManager.getRoutesManager();
            //console.log(req.method);
            //console.log(req.body);
            formData.update(req.body);
            if (formData.isValid()) {
                const person = await PersonModel.create({
                    firstname: formData.getField("firstname").value,
                    lastname: formData.getField("lastname").value,
                    birthday: formData.getField("birthday").value,
                });
                return res.redirect(RouteHelper.path("people:index"));
            }
        }

        res.render("people/create", {
            title: "Create person",
            referrer: req.get("referrer"),
            values: formData.getFields(),
        });
    }

    async update(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        const person = await PersonModel.findByPk(id);
        const formData = new PersonFormData({
            firstname: person.firstname,
            lastname: person.lastname,
            birthday: person.birthday,
        });

        if (req.method === "POST") {
            console.log("PeopleController#update#post");
            formData.update(req.body);
            if (formData.isValid()) {
                person.update({
                    firstname: formData.getField("firstname").value,
                    lastname: formData.getField("lastname").value,
                    birthday: formData.getField("birthday").value,
                });
                // person.firstname = formData.getField("firstname").value;
                // person.lastname = formData.getField("lastname").value;
                // person.birthday = formData.getField("birthday").value
                await person.save();
                return res.redirect(RouteHelper.path("people:index"));
            }
        }

        if (person) {
            return res.render("people/update", {
                title: `${person.firstname} ${person.lastname}`,
                person: person,
                values: formData.getFields(),
                referrer: req.get("referrer"),
            });
        }
        next();
    }

    async delete(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        const person = await PersonModel.findByPk(id);

        if (req.method === "POST") {
            console.log("PeopleController#delete#post");
            await person.destroy();
            return res.redirect(RouteHelper.path("people:index"));
        }

        if (person) {
            return res.render("people/delete", {
                title: `${person.firstname} ${person.lastname}`,
                person: person,
                referrer: req.get("referrer"),
            });
        }

        next();
    }


    async create_post(req, res, next) {
        //const rm = RoutesManager.getRoutesManager();
        console.log(req.method);
        console.log(req.body);
        const body = req.body;
        if (body.firstname && body.lastname && body.birthday) {
            const person = PersonModel.create({
                firstname: body.firstname,
                lastname: body.lastname,
                birthday: body.birthday,
            });
            res.redirect(rm.getRoutePattern("people:index"));
        }
    }
}

module.exports = PeopleController.getInstance();
