var express = require('express');
var router = express.Router();

var _users = [];
_users.push({id:1,name:'Jose Miguel Loor'});

router.get('/', function(req, res, next) {
  res.set('Content-Type', 'application/json');
  res.send(_users);
});

router.post('/', function(req, res, next) {
	res.set('Content-Type', 'application/json');
	var _data = req.body;
	if (_data.id === undefined || _data.id === null) {
		_data.id = _users.length();	
	}
	_users.push(_data);
});

module.exports = router;
