/**
 * MealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  new: async function (req, res) {
    let categories = await Category.find();
    res.view("pages/fitnessplan/newFitnessplan", { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create new fitnessplan....");
    let params = req.allParams();
    await Fitnessplan.create(params);
    res.view("pages/fitnessplan/statusFitnessplan", {
      fitnessplanname: params.name,
    });
  },

  find: async function (req, res) {
    sails.log.debug("List all fitnessplans....");
    let fitnessplans;
    if (req.query.q && req.query.q.length > 0) {
      fitnessplans = await Fitnessplan.find({
        name: {
          contains: req.query.q,
        },
      });
    } else {
      fitnessplans = await Fitnessplan.find().populate("category");
    }
    res.view("pages/fitnessplan/adminFitnessplan", {
      fitnessplans: fitnessplans,
    });
  },

  findOne: async function (req, res) {
    sails.log.debug("List single fitnessplan....");
    let fitnessplan = await Fitnessplan.findOne({ id: req.params.id });
    res.view("pages/fitnessplan/showFitnessplan", { fitnessplan: fitnessplan });
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single Fitnessplan....");
    let fitnessplan = await Fitnessplan.findOne({ id: req.params.id }).populate(
      "category"
    );
    res.view("pages/fitnessplan/editFitnessplan", { fitnessplan: fitnessplan });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single Fitnessplan....");
    let fitnessplan = await Fitnessplan.updateOne({ id: req.params.id }).set(
      req.body
    );
    res.redirect("/fitnessplan");
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single Fitnessplan....");
    await Fitnessplan.destroyOne({ id: req.params.id });
    res.redirect("/fitnessplan");
  },
};
