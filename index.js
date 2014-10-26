module.exports = function (stylecow) {

	stylecow.addTask({
		"Function": {
			":matches": function (fn) {
				var selector = fn.ancestor({type: 'Selector'});
				var value = selector.toString();
				var search = fn.toString();

				fn.getValue().forEach(function (replace) {
					selector.insertBefore(new stylecow.Selector()).setValue(value.replace(search, replace));
				});

				selector.remove();
			}
		}
	});
};
