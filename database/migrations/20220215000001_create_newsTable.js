exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('News', (table) => {
    table.increments('id').primary();
    table.string('authorName');
    table.string('category');
    table.string('headline');
    table.string('image');
    table.string('newsLink');
    table.timestamp('uploadTime').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
  });
};
  
exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('News');
};
  