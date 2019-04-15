'use strict';
console.log('appRoutes')
module.exports = function(app) {
  var todoList = require('../controller/appController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
    

  // app.route('/tasks/login')  
  //   .post(todoList.login_system);
   
  //  app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
    };