/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */



module.exports.bootstrap = async function () {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if ((await User.count()) > 0) {
    return;
  }
  //
  await User.createEach([
    {
      emailAddress: "ju411haa@htwg-konstanz.de",
      fullName: "Julian Haase",
      isSuperAdmin: true,
      password: await sails.helpers.passwords.hashPassword("adminPasswort"),
    },
    {
      emailAddress: "sarah.seidel@gmx.net",
      fullName: "Sarah Seidel",
      isSuperAdmin: false,
      password: await sails.helpers.passwords.hashPassword("sarahPasswort"),
    }
  ]);
  await Category.createEach([
    { name: 'Anfänger', ordernumber: 1}, { name: 'Fortgeschritten', ordernumber: 2}, { name: 'Profis', ordernumber: 3}
  ])
  await CategoryMeal.createEach([
    { name: 'Fleisch', ordernumber: 1}, { name: 'Fisch', ordernumber: 2}, { name: 'Veggie', ordernumber: 3}, { name: 'Halal', ordernumber: 4}
  ]);

  let categoryAnfänger = await Category.findOne({name: "Anfänger"})
  let categoryFortgeschritten = await Category.findOne({name: "Fortgeschritten"})
  let categoryProfis = await Category.findOne({name: "Profis"})


  
  await Fitnessplan.createEach([
    { name: 'Bursttraining', description: "Brusttraining für die obere Brust", amountExercises: 3, exerciseOne: "Kurzhantelbankdrücken an der Schrägbank - 3 Sätze a 8 Wiederholungen", exerciseTwo: "Butterflys am Kabelturm - 3 Sätze a 8 Wiederholungen", exerciseThree: "Dimanond Push-ups - 4 Sätze a 10 Wiederholungen", category: categoryFortgeschritten.id}, 
    { name: 'Beintraining', description: "Beintraining für mehr Volumen", amountExercises: 3, exerciseOne: "Deadlifts", exerciseTwo: "Squads mit 80% des Maximalgewichts - 3 Sätze a 6 Wiederholungen", exerciseThree: "Ausfallschritte ", category: categoryProfis.id}, 
    { name: 'Bizepstraining', description: "Bizpestrainnig für beide Köpfe + Brachialis", amountExercises: 3, exerciseOne: "Hammercurls (schwer)", exerciseTwo: "Negative Curls - 3 Sätze a 8 Wiederholungen", exerciseThree: "Curls mit der SZ-Stange - 3 Sätze a 8 Wiederholungen", category: categoryFortgeschritten.id}, 
    { name: 'Trizepstraining', description: "Trizepstraining mit Fokus auf den 2 Kopf", amountExercises: 3, exerciseOne: "Scullcrushers - 3 Sätze a 8 Wiederholungen", exerciseTwo: "Ellbowpush-ups - 3 Sätze a 10 Wiederholungen", exerciseThree: "Overshoulder Triceps push-ups - 3 Sätze a 8 Wiederholungen", category: categoryProfis.id}, 
    { name: 'Rückentraining', description: "Rückentraining für den Latisimus", amountExercises: 3, exerciseOne: "Supported Pull-ups - 3 Sätze a 8 Wiederholungen", exerciseTwo: "Rudern am Kabelturm mit engem Griff", exerciseThree: "Kurzhantelrudern an der Bank - 3 Sätze a 8 Wiederholungen", category: categoryAnfänger.id}, 
    { name: 'Beintraining', description: "Beintraining für den Oberschenkel", amountExercises: 3, exerciseOne: "Squads mit dem eigenen Körpergewicht", exerciseTwo: "Ausfallschritte", exerciseThree: "Seated Legg curls", category: categoryAnfänger.id}
  ]);


  let categoryFleisch = await CategoryMeal.findOne({name: "Fleisch"})
  let categoryFisch = await CategoryMeal.findOne({name: "Fisch"})
  let categoryVeggie = await CategoryMeal.findOne({name: "Veggie"})
  let categoryHalal = await CategoryMeal.findOne({name: "Halal"})

  await Meal.createEach([
    { name: 'Low Fat - Pute mit Reis', description: "Pute mit leckerem Reis", protein: 60,  calories: 600, fat: 13, ingredientOne: "200 g Putenbrust angebraten", ingredientTwo: "Eine Tasse Reis", ingredientThree: "Wahlweise ein Spiegelei dazu legen", categoryMeal:  categoryFleisch.id}, 
    { name: 'High Protein - Lachs und Ofenkartoffeln', description: "Gebratener Lachs mit Ofenkartoffeln", protein: 55,  calories: 550, fat: 20, ingredientOne: "200 g Lachs angebraten", ingredientTwo: "300 g Ofenkartoffeln", ingredientThree: "Kräuterquark", categoryMeal: categoryFisch.id}, 
    { name: 'Low carbs - Ragù alla bolognese', description: "Leckere bolognese mit veganem Hack", protein: 55,  calories: 400, fat: 20, ingredientOne: "250 g veganes Hack aus dm", ingredientTwo: "125 g Spaghetti ", ingredientThree: "Tomatensoße", categoryMeal: categoryVeggie.id}, 
    { name: 'High Protein - Rindersteak mit Bratkartoffeln', description: "Saftiges Rindersteak mit Bratkartoffeln", protein: 70,  calories: 800, fat: 50, ingredientOne: "250 g Rumpsteak", ingredientTwo: "200g Bratkartoffeln - beliebig Würzen ", ingredientThree: "Kräuterquark", categoryMeal: categoryHalal.id}

  ]);

  



};
