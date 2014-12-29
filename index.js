module.exports = function (stylecow) {

	stylecow.addTask({
		filter: {
			type: 'Function',
			name: ':matches'
		},
		fn: function (fn) {
			var selector = fn.parent('Selector');
			var value = selector.toString();
			var search = fn.toString();

			fn.forEach(function (replace) {
				selector.before(stylecow.Selector.createFromString(value.replace(search, replace.toString())));
			});

			selector.remove();
		}
	});
};
