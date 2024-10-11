// api/models/Category.js
module.exports = {
    attributes: {
        name: {
            type: 'string',  
            columnType: 'varchar(80)',  
            required: true,
        },
        ordernumber: {
            type: 'number',  
            columnType: 'integer',  
            required: true,
        },
        fitnessplans: {
            collection: 'fitnessplan',
            via: 'category'
        }
    }
  };