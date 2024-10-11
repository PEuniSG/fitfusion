/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  overview: async function (req, res) {
    let categories = await Category.find().populate("fitnessplans");
    res.view("pages/overview", { categories });
  },
};
