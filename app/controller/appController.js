'use strict';

var Task = require('../model/appModel.js');
console.log('appController')

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
  
  
    console.log(new_task)
    //handles null error 
     if(!new_task.task || !new_task.status){
              res.status(400).send({ error:true, message: 'Please provide task/status' });
  
          }
  else{
    
    Task.createTask(new_task, function(err, task) {
      
      if (err)
        res.send(err);
      res.json(task);
    });
  }
  };
  

  // exports.login_system =function(req,res)
  // {
  //   var new_task = new Task(req.body);
  
  //   var task =new_task.task;
  //   var status = new_task.status;
  
  //   console.log("Yes this is login",task,status)

  //   if (!task && !status) {
  //     console.log('hello')
  //     res.status(400).send({ error:true, message: 'Please provide task/status' });
  
  //     }
  // else{
    
  //   Task.loginsystem(new_task, function(err, task) {
      

  //     console.log('login in',task)
  //     if (err)
  //       res.send(err);
  //     res.json(task);

    
  //   });
  // }
  //   }
  

  // exports.read_a_task = function(req, res) {
  //   Task.getTaskById(req.params.taskId, function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json(task);
  //   });
  // };
  
  
  // exports.update_a_task = function(req, res) {
  //   Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json(task);
  //   });
  // };
  

  // exports.delete_a_task = function(req, res) {


  //   Task.remove( req.params.taskId, function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json({ message: 'Task successfully deleted' });
  //   });
  // };