"use strict";

const _ = require('lodash');

const increment_question_perso = async () => {
	const key = 'nb_question_perso';
	const value = (temp[key] || 0) + 1;
	temp[key] = value;
}

return increment_question_perso();