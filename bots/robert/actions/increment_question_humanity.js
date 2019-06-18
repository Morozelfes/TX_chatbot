"use strict";

const _ = require('lodash');

const increment_question_humanity = async () => {
	const key = 'nb_question_humanity';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_question_humanity();