"use strict";

const _ = require('lodash');

const increment_question_none = async () => {
	const key = 'nb_question_none';
	const value = (temp[key] || 0) + 1;
	temp[key] = value;
}

return increment_question_none();