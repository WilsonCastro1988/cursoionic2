var express = require('express');
var router = express.Router();

var _movies = [];
_movies.push({id:1,name:'Godfather',director:'Francis Ford Coppola'});
_movies.push({id:2,name:'Bram Stoker\'s Dracula',director:'Francis Ford Coppola'});
_movies.push({id:3,name:'Gladiator',director:'Ridley Scott'});
_movies.push({id:4,name:'Apocalypse Now',director:'Francis Ford Coppola'});
_movies.push({id:5,name:'Apocalypse Now',director:'Darren Aronofsky'});
_movies.push({id:6,name:'Black Swan',director:'Darren Aronofsky'});
_movies.push({id:7,name:'The Wrestler',director:'Darren Aronofsky'});
_movies.push({id:8,name:'Unbreakable',director:'M. Night Shyamalan'});
_movies.push({id:9,name:'The Sixth Sense',director:'M. Night Shyamalan'});
_movies.push({id:10,name:'Eastern Promises',director:'David Cronenberg'});
_movies.push({id:11,name:'Shot Caller',director:'Ric Roman Waugh'});

router.get('/', function(req, res, next) {
  res.set('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Request-Method", "*");
  res.send(_movies);
});

router.get('/:id', function(req, res, next) {
	res.set('Content-Type', 'application/json');
	 
	var _id = req.params.id;
	var _index = -1;
	var movie=null;
	for(var i = 0; i < _movies.length; i++) {
		if (_movies[i].id == _id) {
			_index = i;
			movie=_movies[i];
			//res.send(_movies[i]);
			break;
		}	
	}

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Request-Method", "*");
	if(movie===null){
		res.status(404).send();
	}
	res.status(200).send(movie);

  });
  

router.post('/', function(req, res, next) {
	res.set('Content-Type', 'application/json');
	var _data = req.body;
	if (_data.id === undefined || _data.id === null) {
		_data.id = _movies.length + 1;
	}
	_movies.push(_data);
	
	res.status(201).send();
});

router.delete('/:id', function(req, res, next) {
	res.set('Content-Type', 'application/json');
	var _id = req.params.id;
	var _index = -1;
	for(var i = 0; i < _movies.length; i++) {
		if (_movies[i].id == _id) {
			_index = i;
			break;
		}	
	}
	if (_index > -1) {
		_movies.splice(_index, 1);
		res.status(200).send();
	} else { 
		res.status(404).send();
	}
});

router.put('/:id', function(req, res, next) {
	res.set('Content-Type', 'application/json');
	var _id = req.params.id;
	var _data = req.body;
	var _index = -1;
	for(var i = 0; i < _movies.length; i++) {
		if (_movies[i].id == _id) {
			_index = i;
			break;
		}	
	}
	if (_index > -1) {
		_movies[_index].name = _data.name;
		_movies[_index].director = _data.director;
		res.status(200).send();
	} else { 
		res.status(404).send();
	}
});

module.exports = router;
