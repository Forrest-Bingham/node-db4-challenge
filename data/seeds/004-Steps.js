
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('Steps').insert([
        {Recipe_Id: 1, 
        Instructions:"Take 2 pieces of bread and put them on a hot pan. Flip over once toasted. Place 1 slice of cheese on each piece of bread. Once cheese is melty, combine cheese parts together to make Grilled Cheese"}
        
      ]);
    
};
