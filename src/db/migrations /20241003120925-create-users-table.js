'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('users',
         {
           id:{
              type:Sequelize.UUID,
              allowNull:false,
              defaultValue:Sequelize.UUIDV4,
              primaryKey:true
           },
           name:{
            type:Sequelize.STRING,
            allowNull:false
           },
           age:{
              type:Sequelize.INTEGER,
              allowNull:false
           },
           email:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:true
           },
           created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          }
        });
     
  },

  async down (queryInterface, Sequelize) {
    
      
      await queryInterface.dropTable('users');
     
  }
};
