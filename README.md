# joiner

Mad science d3-like joins for jQuery in jQuery. basically a reimplementation
of the [selections api](https://github.com/mbostock/d3/wiki/Selections), which
is where d3 derives much of its power - given data, this computes new,
old, and removed parts of that data in order to enforce those changes
onto the DOM.

This is inspired by d3 but is a jQuery plugin that doesn't require it, and
should work in all browsers supported by jQuery.

## api

`_data(data, key)`

Same as `d3.data()`

* `_enter()`
* `_exit()`
* `_remove()`

Same as `d3.enter()`, `d3.exit()`

data-driven functions: `_html`, `_text`, `_css`.

## example

```js
var join = $('#items').find('.foo')
    ._data([1, 2, 3]);

join
    ._enter()
    ._append('<div class="foo">hi</div>')
    ._text(function(d) {
        return d;
    });
```
