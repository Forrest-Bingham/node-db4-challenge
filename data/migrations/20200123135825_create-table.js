
exports.up = function(knex) {
    return knex.schema
    .createTable('Recipes', tbl => {

        tbl.increments();

        tbl.string("Meal", 128)
        .notNullable()
        .unique();

        tbl.integer("Ingredient")
        .notNullable();

        tbl.float("Amount")
        .notNullable()
        .unsigned();

        tbl.string("Measurement",128)
        .notNullable();

    })

    

    .createTable('Ingredients', tbl => {

        tbl.increments();

        tbl.string("Name",128)
        .notNullable();
    })

    .createTable('Steps', tbl => {

        tbl.increments();

        tbl.integer('Recipe_Id')
        .references('Recipes.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.text("Instructions",5000)
        .notNullable();
    })

    .createTable('Ingredient_Identifier', tbl => {
        tbl.primary(["Ingredient_Id", "Single_Id"]);

        tbl.integer('Ingredient_Id')
        .references("Ingredient")
        .inTable('Recipes')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer('Single_Id')
        .references('id')
        .inTable('Ingredients')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
  
};

exports.down = function(knex) {
  
    return knex.schema
        .dropTableIfExists('Ingredient_Identifier')
        .dropTableIfExists('Steps')
        .dropTableIfExists('Ingredients')
        
        .dropTableIfExists('Recipes')
};
