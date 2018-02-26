// const express = require('express'); 
// const router = express.Router();

// const pool = require('../modules/pool.js');

// router.post('/', function(req, res){
//   foodObject = req.body.food
//   const sqlText = `insert into foods (name, rating, ishot, spiciness) values($1, $2, $3, $4)`
//   pool.query(sqlText, [foodObject.name, foodObject.rating, foodObject.isHot, foodObject.spiciness])
//   .then(function(result){
//       console.log('Added food (not object)', result);
//       res.sendStatus(201);
//   })
//   .catch(function(error){
//       console.log('Error locating food', error);
//       res.sendStatus(500);
//   })
// });

// router.get('/', function(req, res){
//   const sqlText = 'select * from foods order by id;';
//   pool.query(sqlText)
//   .then(function(result){
//       res.send(result.rows);
//   }).catch(function(error){
//       res.sendStatus(500);
//   })
// })

// router.delete('/:id', function(req, res){
//   const id = req.params.id;
//   const sqlText = `delete from foods where id=$1`;
//   pool.query(sqlText, [id])
//   .then(function(result){
//       console.log('Food deleted', result);
//       res.send(200);
//   }).catch(function(error){
//       console.log('Error, food not deleted:', error);
//       res.sendStatus(500);
//   })
// })

// router.put('/:id', function(req, res){
//   note = req.body.note;
//   id = req.params.id;
//   const sqlText = `update foods set NAME=$1 where id=${id}`;
//   pool.query(sqlText, [note, id])
//   .then(function(result){
//       console.log('Foods redited', result);
//       res.send(200);
//   }).catch(function(error){
//       console.log('Error, foods not re-noted:', error);
//       res.sendStatus(500);
//   })
// })

// module.exports = router;