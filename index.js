"use strict";

module.exports = function (tasks) {

    tasks.addTask({
        filter: {
            type: 'PseudoClass',
            name: 'matches'
        },
        fn: function (fn) {
            var selector = fn.getParent('Selector'),
                value = selector.toString(),
                search = fn.toString();

            fn.forEach(replace => selector.codeBefore(value.replace(search, replace.toString()), 'Selector'));

            selector.remove();
        }
    });
};
