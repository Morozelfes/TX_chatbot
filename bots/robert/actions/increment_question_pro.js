"use strict";

const _ = require('lodash');

const increment_question_pro = async () => {
	const key = 'nb_question_pro';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_question_pro();