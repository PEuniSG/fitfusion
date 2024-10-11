/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,


OverviewController: {
    '*': 'is-super-admin',
    '*': 'is-logged-in'
  },

OverviewMealController: {
    '*': 'is-super-admin',
    '*': 'is-logged-in'
},

CalculateController: {
    '*': true
    
  },

  FitnessplanController: {
    '*': 'is-super-admin',
    'findOne': 'is-logged-in'
  },
  CategoryController: {
    '*': 'is-super-admin'
  },
  MealController: {
    '*': 'is-super-admin',
    'findOne': 'is-logged-in'
  },
  CategoryMealController: {
    '*': 'is-super-admin'
  }

};
