const PersonModel = require("./../models/PersonModel");

class PeopleController {
    async index(req, res, next) {
        const people = await PersonModel.findAll({
            where: {
                published: true,
            },
        });
        console.log(people);
        return res.render("people/index", {
            title: "People",
            people: people
        });
    }

    async detail(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || id === NaN) {
            return next();
        }
        const person = await PersonModel.findByPk(id);
        if(person) {
            return res.render("people/detail", {
                title: `${person.firstname} ${person.lastname}`,
                person: person
            })
        }
        return next();
    }
}

module.exports = new PeopleController;