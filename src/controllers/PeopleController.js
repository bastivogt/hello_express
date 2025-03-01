const BaseController = require("../../sevo/controllers/BaseController");
const PersonModel = require("../models/PersonModel");
//const RoutesManager = require("./../../sevo/routes/RoutesManager");
const RouteHelper = require("../helpers/RouteHelper");
const StringUtils = require("../../sevo/utils/StringUtils");

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
            });
        }
        next();
    }

    async create(req, res, next) {
        let values = {
            firstname: "",
            lastname: "",
            birthday: "",
        };
        if (req.method === "POST") {
            //const rm = RoutesManager.getRoutesManager();
            console.log(req.method);
            console.log(req.body);
            values = req.body;
            console.log("VALUES", values);
            if (values.firstname && values.lastname && values.birthday) {
                const person = await PersonModel.create({
                    firstname: values.firstname,
                    lastname: values.lastname,
                    birthday: values.birthday,
                });
                return res.redirect(RouteHelper.url("people:index"));
            }
        }

        res.render("people/create", {
            title: "Create person",
            values: values,
        });
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
