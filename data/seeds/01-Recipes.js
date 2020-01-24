
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('Recipes').insert([
        { Meal: 'Grilled Cheese', Ingredient:1, Amount: 2, Measurement: "Slices"},
        { Meal: 'Grilled Chicken', Ingredient:2, Amount: 2, Measurement: "Slices"}
        
      ]);
   
};
