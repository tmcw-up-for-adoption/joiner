# joiner

mad science d3-like joins for jquery in jquery

## api

`_data(data, key)`

Same as `d3.data()`

* `_enter()`
* `_exit()`
* `_remove()`

Same as `d3.enter()`, `d3.exit()`

data-driven functions: `_html`, `_text`.

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
