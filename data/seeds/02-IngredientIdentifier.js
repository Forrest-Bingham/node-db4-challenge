
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('Ingredient_Identifier').insert([
        { Ingredient_Id: 1, Single_Id: 1},
        { Ingredient_Id: 2, Single_Id: 2}
      ]);
    
};
