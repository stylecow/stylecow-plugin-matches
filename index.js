"use strict";

module.exports = function (stylecow) {

	stylecow.addTask({
		filter: {
			type: 'PseudoClass',
			name: 'matches'
		},
		fn: function (fn) {
			var selector = fn.getParent('Selector'),
				value = selector.toString(),
				search = fn.toString();

			fn.forEach(function (replace) {
				selector.codeBefore(value.replace(search, replace.toString()), 'Selector');
			});

			selector.remove();
		}
	});
};
