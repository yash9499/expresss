//Used for querying by _id
var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();
// index return all dogs
// router.get('/',function(req,res,next){
// 	res.render('index',{title:'Express'});
// });
exports.homeDog = function(req, res) {
	// var db = req.db;
	// var collection = db.collection('requirements');
	// collection.find().toArray(function(err, reqArray) {
	// 	if (reqArray) {
	// 		res.render('index', {
	// 			title: 'Requirements',
	// 			path: req.path,
	// 			requirements: reqArray
	// 		});
	// 	}
	// 	else {
	// 		res.render('index', {
	// 			title: 'No Requirements Found'
	// 		});
	// 	}
	// });
	res.render('index',{title:'Express'});
};
exports.homeReq=function(req,res){
	var db=req.db;
	var collection= db.collection('requirements');
	
	collection.find().toArray(function(err,response){
		console.log(response);
		res.json(response);
	});
}
// get one dog
exports.findByName = function(req, res) {
//	res.redirect()
	res.render('dog',{title:'Express'});
	// var db = req.db;
	// var collection = db.collection('requirements');
	// var name = req.params.name;
	// collection.findOne({
	// 	'name': name
	// }, function(err, item) {
	// 	if (item) {
	// 		res.render('dog', {
	// 			title: item.name,
	// 			req: item
	// 		});
	// 	}
	// 	else {
	// 		res.render('error', {
	// 			message: 'Not Found'
	// 		});
	// 	}
	// });
};
exports.findByNameApi = function(req, res) {
// 	//res.redirect('/dog/'+req.params.name);
	console.log(req.params.name);
	res.send();
// 	var db = req.db;
// 	var collection = db.collection('requirements');
// 	var name = req.params.name;
// 	collection.findOne({
// 		'name': name
// 	}, function(err, item) {
// 		if (item) {
// 			res.send(item);
// 		}
// 		else {
// 			res.send('error');
// 		}
// 	});
 };
// // create a new dog
exports.createReq = function(req, res) {
	var db = req.db;
	var collection = db.collection('requirements');
	var post = req.body;
	collection.insert(post, {
		safe: true
	}, function(error, result) {
		if (error) {
			res.send('error');
		}
		else {
			res.send("success");
		}
	});
};

// // update a dog
// exports.updateDog = function(req, res) {
// 	var db = req.db;
// 	var collection = db.collection('requirements');
// 	var id = req.body._id;
// 	var post = req.body;

// 	var dname = req.body.name;
// 	var dbreed = req.body.breed;
// 	var dcolour = req.body.colour;

// 	var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
// 	if (id.match(checkForHexRegExp)) {
// 		var objectId = new ObjectId(id);
// 		collection.update({
// 			'_id': objectId
// 		}, {
// 			$set: {
// 				name: dname,
// 				breed: dbreed,
// 				colour: dcolour
// 			}
// 		}, {
// 			safe: true
// 		}, function(err, item) {
// 			if (err) {
// 				res.render('error', {
// 					message: 'Dog Update Failed! ' + err
// 				});
// 			}
// 			else {
// 				res.redirect("/");
// 			}
// 		});
// 	}
// 	else {
// 		res.render('error', {
// 			message: 'Invalid Value'
// 		});
// 	}
// };
// exports.apiReq = function(req,res){
// 	var db = req.db;
// 	var collection = db.collection('requirements');
// 	collection.find().toArray(function(err, reqArray){
// 		console.log(reqArray)
// 		res.send(reqArray);
// 	});
// }
// // delete a dog
// exports.deleteDog = function(req, res) {
// 	var db = req.db;
// 	var collection = db.collection('requirements');
// 	var _id = req.body._id;
// 	var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
// 	if (_id.match(checkForHexRegExp)) {
// 		var objectId = new ObjectId(_id);
// 		collection.remove({
// 			'_id': objectId
// 		}, {
// 			safe: true
// 		}, function(error, result) {
// 			if (error) {
// 				res.render('error', {
// 					message: 'Dog Delete failed!'
// 				});
// 			}
// 			else {
// 				res.redirect("/");
// 			}
// 		});
// 	}
// 	else {
// 		res.render('error', {
// 			message: 'Invalid _id'
// 		});
// 	}
// };
exports.delete = function(req, res) {
	var db = req.db;
	var collection = db.collection('requirements');
	var id = req.params.id;
	console.log("id__"+id);
	var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
	if (id.match(checkForHexRegExp)) {
		console.log("hello");
		var objectId = new ObjectId(id);
		collection.remove({
			'_id': objectId
		}, {
			safe: true
		}, function(error, result) {
			if (error) {
				res.render('error');
			}
			else {
				res.send("success");
			}
		});
	}
	else {
		
		res.send('error Invalid _id'
		);
	}
};