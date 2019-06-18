"use strict";

const _ = require('lodash');

const increment_question_hobby = async () => {
	const key = 'nb_question_hobby';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_question_hobby();