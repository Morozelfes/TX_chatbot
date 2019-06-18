"use strict";

const _ = require('lodash');

const increment_question_art = async () => {
	const key = 'nb_question_sport';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_question_sport();