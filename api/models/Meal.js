// api/models/Meal.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        protein: { type: 'number', columnType: 'INTEGER', defaultsTo: 0 },
        calories: { type: 'number', columnType: 'INTEGER', defaultsTo: 0 },
        fat: { type: 'number', columnType: 'INTEGER', defaultsTo: 0 },
        ingredientOne: { type: 'string', columnType: 'varchar(80)' },
        ingredientTwo: { type: 'string', columnType: 'varchar(80)' },
        ingredientThree: { type: 'string', columnType: 'varchar(80)' },
        categoryMeal: { model: 'categoryMeal' }
    },
};

