module.exports = function (stylecow) {

	stylecow.addTask({
		"Function": {
			":matches": function (fn) {
				var selector = fn.parent({type: 'Selector'});
				var value = selector.toString();
				var search = fn.toString();

				fn.forEach(function (replace) {
					selector.before(stylecow.Selector.createFromString(value.replace(search, replace.toString())));
				});

				selector.remove();
			}
		}
	});
};
