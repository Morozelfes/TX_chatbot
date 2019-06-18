"use strict";

const _ = require('lodash');

const increment_general_message = async () => {
	const key = 'nb_message';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_general_message();