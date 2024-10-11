/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */




module.exports.routes = {

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /login':              { action: 'entrance/view-login' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  'GET /logout':                         { action: 'account/logout' },
  'POST  /login':                        { action: 'entrance/login' },
  'POST  /signup':                       { action: 'entrance/signup' },
  
  'POST  /updateProfile':                { action: 'account/update-profile' },
  'POST  /updatePassword':               { action: 'account/update-password' },
  

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': { view: 'pages/homepage' },
 'GET /fitnessplanOverview': { controller: 'OverviewController', action: 'overview'},
 'GET /mealOverview': { controller: 'OverviewMealController', action: 'overviewMeal'},
 
 
 '/datenschutz': { view: 'pages/datenschutz' },
 '/impressum': { view: 'pages/impressum' },

 'GET /admin':{view: 'pages/admin'},
 'GET /welcome': { action: 'view-homepage-or-redirect' },



 'GET /fitnessplan/newFitnessplan': { controller: 'FitnessplanController', action:'new' },
 'POST /fitnessplan': { controller: 'FitnessplanController', action:'create' },
 'GET /fitnessplan': 'FitnessplanController.find',
 'GET /fitnessplan/:id': 'FitnessplanController.findOne',



'GET /fitnessplan/:id/delete': {controller: 'FitnessplanController', action: 'destroyOne'},
'POST /fitnessplan/:id/update': {controller: 'FitnessplanController', action: 'updateOne'},
'GET /fitnessplan/:id/edit': {controller: 'FitnessplanController', action: 'editOne'},




'GET /category/new': { view: 'pages/category/new' },
'POST /category': { controller: 'CategoryController', action:'create' },
'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
'GET /category': { controller: 'CategoryController', action: 'find' },





'GET /caloriesCalculator':{controller: 'CalculateController', action:'viewCalculate'},
// 'GET /calculate' : {controller: 'CalculateController' , action:'calculateCalories'}


'GET /meal/newMeal': { controller: 'MealController', action:'new' },
'POST /meal': { controller: 'MealController', action:'create' },
'GET /meal': 'MealController.find',
'GET /meal/:id': 'MealController.findOne',



'GET /meal/:id/delete': {controller: 'MealController', action: 'destroyOne'},
'POST /meal/:id/update': {controller: 'MealController', action: 'updateOne'},
'GET /meal/:id/edit': {controller: 'MealController', action: 'editOne'},





'GET /categoryMeal/new': { view: 'pages/categoryMeal/new' },
 'POST /categoryMeal': { controller: 'CategoryMealController', action:'create' },
 'GET /categoryMeal/:id/destroy': { controller: 'CategoryMealController', action: 'destroyOne' },
 'GET /categoryMeal': { controller: 'CategoryMealController', action: 'find' },
 

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
