exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('Users', (table) => {
    table.increments('id').primary();
    table.string('userName');
    table.string('email').unique();
    table.string('password');
    table.string('phone');
    table.string('gender');
    table.string('language');
    table.date('birthDate');
    table.string('birthTime');
    table.boolean('tnc').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
  });
};

// exports.up = (knex, Promise) => {
//   return knex.schema.alterTable('Users', (table) => {
//     table.unique('email');
//   });
// };

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('Users');
};
