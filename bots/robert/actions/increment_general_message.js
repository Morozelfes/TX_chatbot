"use strict";

const _ = require('lodash');

const increment_general_message = async () => {
	const key = 'nb_message';
	const value = (temp[key] || 0) + 1;
	temp[key] = value;
}

return increment_general_message();