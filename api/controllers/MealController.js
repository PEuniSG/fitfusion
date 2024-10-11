/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  new: async function (req, res) {
    sails.log.debug("Create NEW Meal....");
    let categoriesMeal = await CategoryMeal.find();
    res.view("pages/meal/newMeal", { categoriesMeal });
  },

  create: async function (req, res) {
    sails.log.debug("Create new meal....");
    let params = req.allParams();
    await Meal.create(params);
    res.view("pages/meal/statusMeal", { mealname: params.name });
  },

  find: async function (req, res) {
    sails.log.debug("List all Meals....");
    let meals;
    if (req.query.q && req.query.q.length > 0) {
      meals = await Meal.find({
        name: {
          contains: req.query.q,
        },
      });
    } else {
      meals = await Meal.find().populate("categoryMeal");
    }
    res.view("pages/meal/adminMeal", { meals: meals });
  },

  findOne: async function (req, res) {
    sails.log.debug("List single meal....");
    let meal = await Meal.findOne({ id: req.params.id });
    res.view("pages/meal/showMeal", { meal: meal });
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single meal....");
    let meal = await Meal.findOne({ id: req.params.id }).populate(
      "categoryMeal"
    );
    res.view("pages/meal/editMeal", { meal: meal });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single meal....");
    let meal = await Meal.updateOne({ id: req.params.id }).set(req.body);
    res.redirect("/meal");
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single meal....");
    await Meal.destroyOne({ id: req.params.id });
    res.redirect("/meal");
  },
};
