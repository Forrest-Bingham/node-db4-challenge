
exports.seed = function(knex) {
  // Deletes ALL existing entries
  

      // Inserts seed entries
      return knex('Ingredients').insert([
        { Name: 'Bread'},
        { Name: 'Cheese'}
      ]);
   
};
