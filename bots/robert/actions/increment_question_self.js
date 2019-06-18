"use strict";

const _ = require('lodash');

const increment_question_self = async () => {
	const key = 'nb_question_self';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_question_self();