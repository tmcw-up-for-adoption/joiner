(function($) {
    $.fn._data = function(_, key) {
        if (!arguments.length) return this.__data__;
        key = key || identity;

        var keyMap = {};

        var enter = this.__enter = [],
            exit = this.__exit = [],
            update = this.__update = [];

        var n = _.length, i, k;

        this.__data__ = _;
        this.__key__ = key;

        this.each(function() {
            if (this.__data__) keyMap[key(this.__data__)] = this;
        });

        for (i = -1; ++i < n;) {
            if (keyMap[this.__data__[i]]) {
                update.push(keyMap[this.__data__[i]]);
                keyMap[this.__data__[i]] = false;
            } else {
                enter.push(this.__data__[i]);
            }
        }

        for (k in keyMap) {
            if (keyMap[k]) exit.push(k);
        }

        return this;

        function identity(_) { return _; }
    };

    $.fn._datum = function(_) {
        this.__data__ = _;
        return this;
    };

    $.fn._enter = function() {
        this.__data__ = this.__enter;
        return this;
    };

    $.fn._append = function() {
        var i, n = this.__data__.length;
        var s = this.size();
        for (i = -1; ++i < n;) {
            var el = $(arguments[0])
                .appendTo(this.prevObject);
            el[0].__data__ = this.__data__[i];
            this[s] = el[0];
            this.length++;
            s++;
        }
        return this;
    };

    $.fn._exit = function() {
        this.__data__ = this.__exit;
        return this;
    };

    $.fn._remove = function() {
        var d = this.__data__;
        var key = this.__key__;
        this.each(function() {
            if (d.indexOf('' + key($(this)[0].__data__)) != -1) {
                $(this).remove();
            }
        });
        return this;
    };

    var dataMethods = ['html', 'text', 'css'];
    var i, n = dataMethods.length;
    for (i = -1; ++i < n;) {
        $.fn['_' + dataMethods[i]] = data1(dataMethods[i]);
    }

    function data1(fn) {
        return function() {
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args[i] = functor(arguments[i]);
            }
            this.each(function() {
                var vals = [];
                for (var i = 0; i < args.length; i++) {
                    vals[i] = args[i].call(this, $(this)[0].__data__);
                }
                $(this)[fn].apply($(this), vals);
            });
            return this;
        };
    }

    function functor(_) {
        if (typeof _ === 'function') return _;
        else {
            return function() {
                return _;
            };
        }
    }
})(jQuery);
