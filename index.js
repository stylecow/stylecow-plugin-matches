module.exports = function (stylecow) {

	stylecow.addTask({
		filter: {
			type: 'PseudoClass',
			name: 'matches'
		},
		fn: function (fn) {
			var selector = fn.getParent('Selector');
			var value = selector.toString();
			var search = fn.toString();

			fn.forEach(function (replace) {
				selector.before(stylecow.parse(value.replace(search, replace.toString()), 'Selector'));
			});

			selector.remove();
		}
	});
};
