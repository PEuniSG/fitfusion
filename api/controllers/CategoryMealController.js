/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create new category....");
    let categoryMeal = await CategoryMeal.create(req.allParams());
    res.redirect("/categoryMeal");
  },

  find: async function (req, res) {
    sails.log.debug("List meal category....");
    categoriesMeal = await CategoryMeal.find();
    res.view("pages/categoryMeal/index", { categoriesMeal });
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy category....");
    await CategoryMeal.destroyOne({ id: req.params.id });
    res.redirect("/categoryMeal");
  },
};
