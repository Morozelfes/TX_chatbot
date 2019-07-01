const _ = require('lodash');

const increment_insult = async () => {
	const key = 'nb_insult';
	var value = parseInt(session[key]);
	value +=1;
	session[key] = value;
}

return increment_insult();