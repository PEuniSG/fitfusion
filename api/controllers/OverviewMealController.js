/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  overviewMeal: async function (req, res) {
    let categoriesMeal = await CategoryMeal.find().populate("meals");
    res.view("pages/overviewMeal", { categoriesMeal });
  },
};
