module.exports = function (stylecow) {
	return {
		"Function": {
			":matches": function (fn) {
				var selector = fn.ancestor('Selector');
				var value = selector.name;
				var search = fn.toString();

				fn.content.forEach(function (replace) {
					selector.insertBefore(stylecow.Selector.create(value.replace(search, replace)));
				});

				selector.remove();
			}
		}
	}
};
