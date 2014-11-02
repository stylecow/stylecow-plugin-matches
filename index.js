module.exports = function (stylecow) {

	stylecow.addTask({
		"Function": {
			":matches": function (fn) {
				var selector = fn.parent({type: 'Selector'});
				var value = selector.toString();
				var search = fn.toString();

				fn.getContent().forEach(function (replace) {
					selector.before(new stylecow.Selector()).setContent(value.replace(search, replace));
				});

				selector.remove();
			}
		}
	});
};
