exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('email', 512).notNullable();
            table.string('password', 512).notNullable();
            table.string('role', 512).notNullable().defaultTo('user');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('users');
};