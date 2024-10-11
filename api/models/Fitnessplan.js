// api/models/Meal.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true },
        description: { type: 'string', columnType: 'varchar(80)', required: true },
        amountExercises: {
            type: 'number',
            required: true,
            isIn: [1, 2, 3], 
            allowNull: false,
            columnType: 'INTEGER' 
        },
        exerciseOne: { type: 'string', columnType: 'varchar(80)', required: true},
        exerciseTwo: { type: 'string', columnType: 'varchar(80)'},
        exerciseThree: { type: 'string', columnType: 'varchar(80)'},
        category: {
            model: 'category'
        }
    },
  };