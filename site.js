var join = $('#items').find('.foo')
    ._data([1, 2, 3]);

join
    ._enter()
    ._append('<div class="foo">hi</div>')
    ._text(function(d) {
        return d;
    });

var join = $('#items').find('.foo')
    ._data([1, 2, 3, 4]);

join
    ._enter()
    ._append('<div class="foo">hi</div>')
    ._text(function(d) {
        return d;
    });

var join = $('#items').find('.foo')
    ._data([1, 2]);

join
    ._exit()
    ._remove();

join
    ._text(function(d) {
        return 'hi ' + d;
    })
    ._css('opacity', function(d) {
        return d / 2;
    });
